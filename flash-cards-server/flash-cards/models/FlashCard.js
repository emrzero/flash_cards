var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uri = 'mongodb://127.0.0.1:27017/study';

if (mongoose.connection.readyState === 0) {
  mongoose.connect(require(uri));
}

var fcSchema = new Schema({
  "side-a": {type: String},
  "side-b": {type: String},
  "difficulty": {type: String},
  "category": {type: String},
  "sub-category": {type: String},
  "createdAt": { type: Date, default: Date.now },
  "updatedAt": { type: Date, default: Date.now }
});

module.exports = mongoose.model('FlashCard', fcSchema);

