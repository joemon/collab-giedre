const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create a schema
const querySchema = new Schema({
  // You may need to add other fields like owner
  addedOn: String,
  message: String,
});
const Query = mongoose.model('Query', querySchema);
module.exports = Query;