var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.sendFile('data.json', {root: __dirname + '/../' })
});

module.exports = router;
