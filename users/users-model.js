import mongoose from 'mongoose';
import schema from './users-schema.js';

const model = mongoose.model('BuyerModel', schema);

export default model;