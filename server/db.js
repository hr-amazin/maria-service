const mongoose = require('mongoose')

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_URL = process.env.MONGO_URL;

console.log('hola', MONGO_URL);

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URL}`, { useNewUrlParser: true });
//ENVIROMENT VARIABLE:
// mongoose.connect(`mongodb+srv://USERNAME:PASSWORDo@cluster0-x46xc.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true });
//'mongodb://localhost/amazin'
//my desployment: http://description.us-east-2.elasticbeanstalk.com/


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
    if(err) {
      console.log('there is an error', err);
    } else {
      collection.findOne(function(err, result) {
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



