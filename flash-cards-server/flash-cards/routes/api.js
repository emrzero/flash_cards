var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.sendFile('data.json', {root: __dirname + '/../' })
});

router.post('/', function(req, res, next){
  res.send(req.body);
})

module.exports = router;
