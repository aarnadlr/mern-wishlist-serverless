require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const url = require('url');
const assert = require('assert');

async function connectToDatabase(uri) {
  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1));

  return db;
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  const db = await connectToDatabase(process.env.MONGODB_URI);

  // Select the "items" collection
  const collection = await db.collection('items');

  const newItem = {
    name: '222',
    // date: () => Date.now,
    date: 456,
    color: 'red'
  };

  // let savedItem = '';
  // Insert a single document
  // let resObj = await collection.insertOne(
  try {
    collection.findOneAndDelete(
      newItem,
      {
        w: 'majority',
        wtimeout: 10000,
        serializeFunctions: true
      },
       function (err, res) {
        assert.equal(null, err);
        assert.equal(1, res.insertedCount);
        client.close();
        // savedItem = res;
      }
    );

    res.status(200).json({ success: 'true3' });

  } catch (e) {
    console.log('THE ERROR:', e);
  }
};
