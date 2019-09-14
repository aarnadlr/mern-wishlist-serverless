require('dotenv').config();
// const MongoClient = require('mongodb').MongoClient;
// const url = require('url');

const mongoose = require('mongoose');
const Item = require('../../models/Item');

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = (req, res) => {

  mongoose
    .connect(process.env.MONGODB_URI, { useUnifiedTopology: true })
    .then(() => console.log('MONGOOSE CONNECTED'))
    .catch(e => console.log('THE ERR!:', e));

  Item.find()
    .then(items=>res.json(items))
  //   const Item = connection.model('Item', ItemSchema);
  //
  //   Item.find({}, (error, items) => {
  //     if (error) {
  //       connection.close();
  //       res.status(500).json({ error });
  //       return;
  //     }
  //     res.set('cache-control', 's-maxage=1, maxage=0, stale-while-revalidate');
  //     res.body = {success:true}
  //     res.status(200).json({ items });
  //     connection.close();
  //   });
  // } catch (e) {
  //   connection.close();
  //   res.status(500).json({ error: e.message || 'uh oh ' });
  // }
};
