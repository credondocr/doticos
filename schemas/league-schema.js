const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const LeagueSchema = new Schema({
  "series_id": { type: String},
  "series_type": { type: String },
  "match_id": { type: String, unique: true, index: true },
  "match_seq_num": { type: String,  },
  "start_time": { type: String,  },
  "lobby_type": { type: String,  },
  "radiant_team_id": { type: String,  },
  "dire_team_id": { type: String,  },
  "players": {type: Array}
});


module.exports = mongoose.model('League', LeagueSchema);
