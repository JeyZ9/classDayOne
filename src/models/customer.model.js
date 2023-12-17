const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  pathImage: {
    type: String
  },
  birthday: {
    type: String
  },
  deleted: {
    type: Boolean, 
    default: false
  }
});

const model = mongoose.model('customer', schema);

module.exports = model;