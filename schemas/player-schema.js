const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const PlayerSchema = new Schema({
  "account_id": { type: String, unique: true, index: true},
  "wins": { type: Number },
  "losses": { type: Number,  },
  "winrate": { type: Number,  }
});


module.exports = mongoose.model('Player', PlayerSchema);
