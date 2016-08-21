const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const PlayerSchema = new Schema({
  "account_id": { type: String, index: { unique: true }},
  "steam_base_64_id": {type: String},
  "wins": { type: Array },
  "losses": { type: Array,  },
  "winrate": { type: Number,  },
  "wins_count": {type: Number},
  "losses_count": {type: Number}
});

module.exports = mongoose.model('Player', PlayerSchema);
