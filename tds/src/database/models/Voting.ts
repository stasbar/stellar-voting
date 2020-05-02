import mongoose, { model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import slug from 'slug';
import { Authorization, Visibility } from '@stellot/types';
import { VOTING } from '.';

const VotingSchema = new mongoose.Schema({
  slug: { type: String, lowercase: true, unique: true, required: true },
  title: { type: String, required: true },
  polls: [{
    question: { type: String, required: true },
    options: { type: [{ name: String, code: Number }], required: true },
  }],
  votesCap: { type: Number, required: true },
  encrypted: { type: Boolean, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  authorization: {
    type: String,
    enum: [Authorization.OPEN,
      Authorization.EMAILS,
      Authorization.DOMAIN,
      Authorization.CODE,
      Authorization.KEYBASE],
    required: true,
  },
  visibility: {
    type: String,
    enum: [Visibility.PUBLIC, Visibility.UNLISTED, Visibility.UNLISTED],
    required: true,
  },
  assetCode: { type: String, required: true },
  issueAccountId: { type: String, required: true },
  distributionAccountId: { type: String, required: true },
  ballotBoxAccountId: { type: String, required: true },
}, { timestamps: true });

VotingSchema.plugin(uniqueValidator, { message: 'is already taken' });

VotingSchema.set('toJSON', {
  virtuals: true,
});

VotingSchema.set('toObject', {
  virtuals: true,
});

VotingSchema.pre('validate', function (next) {
  // @ts-ignore
  if (!this.slug) {
    // @ts-ignore
    this.slugify();
  }

  next();
});

VotingSchema.methods.slugify = function () {
  // eslint-disable-next-line no-bitwise
  this.slug = `${slug(this.title)}-${(Math.random() * (36 ** 6) | 0).toString(36)}`;
};

export default model(VOTING, VotingSchema);