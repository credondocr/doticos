const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const MatchSchema = new Schema({
  "match_id": { type: String, index: { unique: true } },
  "radiant_win": {type: Boolean},
  "players": {type: Array},
  "duration": {type: Number},
  "pre_game_duration": {type: String},
  "start_time": {type: String},
  "leagueid": {type: String},
  "match_seq_num": {type: String},
  "tower_status_radiant": {type: String},
  "tower_status_dire": {type: String},
  "barracks_status_radiant": {type: String},
  "barracks_status_dire": {type: String},
  "cluster": {type: String},
  "first_blood_time": {type: Number},
  "lobby_type": {type: String},
  "human_players": {type: String},
  "positive_votes": {type: String},
  "negative_votes": {type: String},
  "game_mode": {type: String},
  "flags": {type: String},
  "engine": {type: String},
  "radiant_score": {type: String},
  "dire_score": {type: String},
  "radiant_team_id": {type: String},
  "radiant_name": {type: String},
  "radiant_logo": {type: String},
  "radiant_team_complete": {type: String},
  "dire_team_id": {type: String},
  "dire_name": {type: String},
  "dire_logo": {type: String},
  "dire_team_complete": {type: String},
  "radiant_captain": {type: String},
  "dire_captain": {type: String},
  "picks_bans": {type: Array}
});


module.exports = mongoose.model('Match', MatchSchema);
