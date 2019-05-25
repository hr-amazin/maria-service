const mongoose = require('mongoose');
require('dotenv').config();

 const MONGO_USER = process.env.MONGO_USER;
 const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
 const MONGO_URL = process.env.MONGO_URL;

console.log('hola', MONGO_URL);


mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URL}`, { useNewUrlParser: true });

//url-mongo:cluster0-x46xc.mongodb.net/test?retryWrites=true
//my desployment: http://description.us-east-2.elasticbeanstalk.com/

const connect = mongoose.connection;

module.exports.getOne = (callback) => {
  connect.db.collection('descriptions', (err, collection) => {
    if(err) {
      console.log('there is an error', err);
    } else {
      collection.findOne({_id: 1011},function(err, result) {
        if(err) {
          callback(err);
        } else {
          console.log('this is result DB ', result);
          callback(null, result);
        }
      });
    }  
  });
}



