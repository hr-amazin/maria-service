const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/amazin');
// mongodb://127.0.0.1:27017/amazin'

// let schema = mongoose.Schema({
//   _id: Number,
//   name: String,
//   price: Number,
//   deliver_estimation: String,
//   seller_name: String,
//   description: String
// });

const connect = mongoose.connection;


// const descriptionData = mongoose.model('descriptions', schema);

module.exports.getOne = (callback) => {
  connect.db.collection('descriptions', (err, collection) => {
    collection.findOne(function(err, result) {
      if(err) {
        callback(err);
      } else {
        console.log('this is result DB ', result);
        callback(null, result);
      }
    });
  });
}



