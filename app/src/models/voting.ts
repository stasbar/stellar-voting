import Voting from "@/types/voting";
import { Reducer } from 'redux';
import { Effect, Dispatch } from "dva";
import { performSignedTransaction } from "@/services/voting";
import { castVote, fetchResults } from "@/services/stellar";
import { fetchVoting } from "@/services/tokenDistributionServer";
import { VoteStatus } from "@/types/voteStatus";
import Results from "@/types/results";
import router from "umi/router";

export const VOTING = 'voting';
export const FETCH_VOTING = 'fetchVoting';
export const FETCH_RESULTS = 'fetchResults';
const SET_STATUS = 'setStatus';
const SET_VOTING = 'setVoting';
const SET_RESULTS = 'setResults';

export async function dispatchPerformVote(dispatch: Dispatch, tokenId: string, voting: Voting, optionCode: number) {
  try {
    for await (const [tx, update] of performSignedTransaction(tokenId, voting, optionCode)) {
      if (update) {
        dispatch({
          type: `${VOTING}/${SET_STATUS}`,
          payload: update,
        });
      } else if (tx) {
        dispatch({
          type: `${VOTING}/${SET_STATUS}`,
          payload: VoteStatus.CASTING_VOTE,
        });
        await castVote(tx);
        dispatch({
          type: `${VOTING}/${SET_STATUS}`,
          payload: VoteStatus.DONE,
        });
        setTimeout(() => {
          router.replace(`/voting/${voting.slug}/results`);
        }, 500)
      }
    }
  } catch (e) {
    console.error(e);
    dispatch({
      type: `${VOTING}/${SET_STATUS}`,
      payload: VoteStatus.ERROR,
    });
  }
}

export function dispatchFetchVoting(dispatch: Dispatch, votingSlug: string) {
  dispatch({
    type: `${VOTING}/${FETCH_VOTING}`,
    votingSlug
  })
}

export function dispatchFetchResults(dispatch: Dispatch, voting: Voting) {
  dispatch({
    type: `${VOTING}/${FETCH_RESULTS}`,
    voting
  })
}

export interface VotingStateType {
  voting?: Voting
  status?: VoteStatus;
  results?: Results;
}

export interface VotingModelType {
  namespace: string;
  state: VotingStateType;
  effects: {
    [FETCH_VOTING]: Effect,
    [FETCH_RESULTS]: Effect,
  }
  reducers: {
    [SET_STATUS]: Reducer,
    [SET_VOTING]: Reducer,
    [SET_RESULTS]: Reducer,
  }
}

export const VotingModel: VotingModelType = {
  namespace: VOTING,
  state: {
    voting: undefined,
    status: undefined,
  },
  effects: {
    * [FETCH_VOTING]({ votingSlug }, { call, put }) {
      const voting = yield call(fetchVoting, votingSlug);
      yield put({
        type: SET_VOTING,
        payload: voting
      })
    },
    * [FETCH_RESULTS]({ voting }, { call, put }) {
      const results = yield call(fetchResults, voting);
      yield put({
        type: SET_RESULTS,
        payload: results
      })
    }
  },
  reducers: {
    [SET_STATUS](state: VotingStateType, { payload }): VotingStateType {
      return {
        ...state,
        status: payload,
      }
    },
    [SET_VOTING](state: VotingStateType, { payload }): VotingStateType {
      return {
        ...state,
        voting: payload,
      }
    },
    [SET_RESULTS](state: VotingStateType, { payload }): VotingStateType {
      return {
        ...state,
        results: payload,
      }
    }
  },
};

export default VotingModel;
