/* global fetch */
import 'particles.js';
import particlesJson from './assets/particles.json';
import { VoterSession } from './blindsig';
import { voteOnCandidate } from './stellar';

particlesJS('particles-js', particlesJson);

const sections = ['identify', 'vote', 'results'];
let currentSectionIndex = 0;
let selectedParty;
let tokenId: string;

function showError(message) {
  $('#alert-text').text(message);
  $('.alert').addClass('show');
  $('.alert').alert();
}

async function loginWithPz() {
  console.log('login with pz');
  const login = $('#login').val();
  const password = $('#password').val();
  const request = { login, password };
  try {
    $('#loginSpinner').removeClass('d-none');
    $('#loginWithPz').prop('disabled', true);
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    const data = await response.json();
    console.log({ userId: data.userId });
    tokenId = data.userId;
    $('#userId').text(data.userId);
    $('#btnManualMode').prop('disabled', false);
    $('#btnSimpleVote').prop('disabled', false);
    if (response.ok) {
      console.log('Successfully logged in');
    } else {
      console.error('Failed to login');
      throw new Error(response.message);
    }
    $('#loginWithPzModal').modal('hide');
  } finally {
    $('#loginSpinner').addClass('d-none');
    $('#loginWithPz').prop('disabled', false);
  }
}


async function performVote() {
  await voteOnCandidate(tokenId)
}

async function createPartiesList() {
  const partiesWithVotes = await fetchResults();
  const list = $('#party-list');
  partiesWithVotes.forEach(party => {
    console.log({ party });
    const li = $('<li/>')
      .addClass(
        'list-group-item list-group-item-action d-flex justify-content-between align-items-center',
      )
      .text(party.name)
      .click(() => {
        selectedParty = party;
        $('#party-list > li').removeClass('active');
        li.addClass('active');
      })
      .appendTo(list);

    $('<span/>')
      .addClass('badge badge-primary badge-pill')
      .text(party.votes || 0)
      .appendTo(li);

    return li;
  });
}

async function createResultsPlot() {
  const partiesWithVotes = await fetchResults();
  // set the dimensions and margins of the graph
  const margin = { top: 30, right: 30, bottom: 70, left: 60 };
  const width = 460 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  // append the svg object to the body of the page
  d3.select('svg').remove();
  const svg = d3
    .select('#resultsPlot')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);
  // X axis
  const x = d3
    .scaleBand()
    .range([0, width])
    .domain(partiesWithVotes.map(party => party.name))
    .padding(0.2);
  svg
    .append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll('text')
    .attr('transform', 'translate(-10,0)rotate(-45)')
    .style('text-anchor', 'end');

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain([0, partiesWithVotes.reduce((prev, current) => prev + (current.votes || 0), 0)])
    .range([height, 0]);
  svg.append('g').call(d3.axisLeft(y));

  // Bars
  svg
    .selectAll('mybar')
    .data(partiesWithVotes)
    .enter()
    .append('rect')
    .attr('x', party => x(party.name))
    .attr('y', party => y(party.votes || 0))
    .attr('width', x.bandwidth())
    .attr('height', party => height - y(party.votes || 0))
    .attr('fill', '#69b3a2');
}

const onStart = {
  identify: () => {
    const login = $('#login').val();
    if (!login) {
      $('#btnManualMode').prop('disabled', true);
      $('#btnSimpleVote').prop('disabled', true);
    }
  },
  vote: () => {},
  results: () => {
    createResultsPlot();
  },
};

function render() {
  sections
    .filter((_value, index) => index !== currentSectionIndex)
    .forEach(value => $(`#${value}`).hide());

  if (!mode) {
    $(`#identify`).show();
    onStart.identify();
  } else {
    $(`#${sections[currentSectionIndex]}`).show();
    onStart[sections[currentSectionIndex]]();
  }
}

function showNextPage() {
  currentSectionIndex = (currentSectionIndex + 1) % sections[mode].length;
  render();
}

function showPreviousPage() {
  currentSectionIndex = currentSectionIndex - 1 >= 0 ? currentSectionIndex - 1 : 0;
  render();
}

render();
createPartiesList();

$('.next').click(() => {
  showNextPage();
});

$('.back').click(() => {
  showPreviousPage();
});

$('#loginWithPz').click(() => {
  loginWithPz();
});

$('#signVoteButton').click(() => {
  signAndSendVote();
});

$('#btnVote').click(async e => {
  e.stopPropagation();
  // await signAndSendVote()
  try {
    await voteOnParty();
    showNextPage();
  } catch (error) {
    console.error(error);
    showError(error.message);
  }
});

$('#issuerAccountId').text(issuerAccountId);
