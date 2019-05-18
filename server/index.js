const express = require('express');
const app = express();
const port = 1128;
const path = require('path');
const bodyparser = require('body-parser');
const db = require('./db.js');


app.use(bodyparser.json());
app.use(express.static(__dirname + '/../public'));



app.get('/description', function(req, res) {
    db.getOne((err, result) => {
      if(err) {
        console.log('ERROR IN SERVER', err);
      } else {
        console.log('Response IN SERVER',result);
        res.send(result);
        res.end();
      }
    });
    // console.log(req);
    // res.send('hola');
    // res.end();
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

