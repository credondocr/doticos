const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const MatchSchema = new Schema({
  "match_id": { type: String, index: { unique: true } },
  "radiant_win": {type: Boolean},
  "players": {type: Array}
});


module.exports = mongoose.model('Match', MatchSchema);
