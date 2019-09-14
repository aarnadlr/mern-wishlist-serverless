require('dotenv').config();

const mongoose = require('mongoose');
const Item = require('../../models/Item');

const connect = ()=>{
  mongoose
    .connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useMongoClient: true
    })
    .then(() => console.log('MONGOOSE CONNECTED'))
    .catch(e => console.log('THE ERR!:', e));
};

module.exports = (req, res) => {
  connect();

  const newItem = new Item({
  	name:'BUTTER'
	})

	newItem.save().then((item)=>res.json(item))

};
