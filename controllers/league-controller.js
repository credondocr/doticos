const Controller = require('../libraries/controller');
const LeagueModel  = require('../models/league-model');
const MatchController = require('../controllers/match-controller');
const PlayerController = require('../controllers/player-controller')
const Dota2Api = require('dota').dota2api;
const config = require('../config/config')
const key = config.api.steam_api_key; //Your personal API key (from above)
const language = 'en_us';// The language to retrieve results in (default is en_us) (see http://en.wikipedia.org/wiki/ISO_639-1 for the language codes (first two characters) and http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes for the country codes (last two characters))
const format = 'JSON';
const dota2api = new Dota2Api(key, language, format);


class LeagueController extends Controller {

   createMatch(match){
     MatchController.parseMatch(match.match_id).then((data) => {
       if(data != null){
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
           PlayerController.sumMatches(radiant, true, match.match_id)
           PlayerController.sumMatches(dire, false, match.match_id)
         } else {
           PlayerController.sumMatches(dire, true, match.match_id)
           PlayerController.sumMatches(radiant, false, match.match_id)
         }
       }

     }).catch((err) => {

     })
     setTimeout(( ) => {  }, 1500);
  }

  fetchLeague(league_id){
    var self = this
    var config = {
      league_id : league_id
    }
    dota2api.getMatchHistory(config, function(err, data) {
      if (err) {
        throw err;
      } else {
        let matches = JSON.parse(data).result.matches;
        matches.forEach((match) => {
          self.createMatch(match)
          match.players.forEach((player)=> {
            PlayerController.storePlayer(player)
            PlayerController.updateScores(player)
            setTimeout(() =>{  }, 2500);
          })
          setTimeout(() =>{  }, 2500);
        })
      }
    })
  }
}

module.exports = new LeagueController(LeagueModel);
