const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  expiry: {
    type: String,
    required: true
  },
  cvc: {
    type: String,
    required: true
  }
})

module.exports = model('card', schema);