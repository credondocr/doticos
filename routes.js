const config = require('./config/config')
const controllers = require('./controllers');
const Dota2Api = require('dota').dota2api;
const Router = require('express').Router;
const router = new Router();
const key = config.api.dota_api_key; //Your personal API key (from above)
const language = 'en_us';// The language to retrieve results in (default is en_us) (see http://en.wikipedia.org/wiki/ISO_639-1 for the language codes (first two characters) and http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes for the country codes (last two characters))
const format = 'JSON';
const dota2api = new Dota2Api(key, language, format);


router.route('/league')
  .get((req, res) => {
    var config = {
      league_id : 3681
    }
    dota2api.getMatchHistory(config, function(err, data) {
      if (err) {
        throw err;
      } else {
        let matches = JSON.parse(data).result.matches;
        matches.forEach((match) => {
          controllers.league.createMatch(match)
          match.players.forEach((player)=> {
            controllers.player.storePlayer(player)
            controllers.player.updateScores(player)
            setTimeout(() =>{  }, 2500);
          })
          setTimeout(() =>{  }, 2500);
        })
        res.status(200).send();
      }
    })
  })

router.route('/players')
  .get((req, res) => controllers.player.findSortedPlayers(res))

router.route('/accountInfo/:account_id')
  .get((req, res) => controllers.player.getAccountInformation(res, req.params.account_id))



module.exports = router;
