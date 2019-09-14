require('dotenv').config();

const mongoose = require('mongoose');
const Item = require('../../models/Item');

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
      // useMongoClient: true
    })
    .then(() => console.log('MONGOOSE CONNECTED'))
    .catch(e => console.log('THE ERR!:', e));
};

module.exports = (req, res) => {
  connect();
  Item.findById(req.query.id)
    .then(item => item.remove())
    .then(() => res.json({ deleted: true }))
    .catch(err=>res.status(404).json({deleted: false}));
};
