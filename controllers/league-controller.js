const Controller = require('../libraries/controller');
const LeagueModel  = require('../models/league-model');
const Dota2Api = require('dota').dota2api;
const MatchController = require('../controllers/match-controller');
const PlayerController = require('../controllers/player-controller')

// HTTP layer, in this instance you can manage express request, response and next.
// In libraries/controller you have the basic RESTful methods find, findOne, findById,
// create, update and remove. Because this class is extending from there, you got that solved.
// You can overwrite extended methods or create custom ones here.

class LeagueController extends Controller {

  createMatch(match){
    MatchController.parseMatch(match.match_id).then((data) => {
      var radiant = [];
      var dire = [];
      //0 - 4 radiant, 128 - 132 dire
      data.players.forEach((player) => {
        if( player.player_slot >= 0 && player.player_slot <= 4 ) {
          radiant.push(player.account_id)
        } else {
          dire.push(player.account_id)
        }
      })

      if(data.radiant_win === true ){
        PlayerController.sumMatches(radiant, { wins: 1 })
      } else {
        PlayerController.sumMatches(dire, { losses: 1 })
      }
    })
    LeagueModel.create(match)
  }
}

module.exports = new LeagueController(LeagueModel);
