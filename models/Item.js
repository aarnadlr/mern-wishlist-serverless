const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'anonymous'
  },
  // description: {
  //   type: String,
  //   required: true
  // },
  // price: {
  //   type: Number,
  //   required: true
  // },
  date: {
    type: Date,
    default: Date.now,
    // required: true
  }
});

module.exports = Item = mongoose.model('item', ItemSchema, 'items')
