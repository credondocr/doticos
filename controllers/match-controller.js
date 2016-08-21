const Controller = require('../libraries/controller');
const MatchModel  = require('../models/match-model');
const Dota2Api = require('dota').dota2api;
const config = require('../config/config')

const key = config.api.dota_api_key; //Your personal API key (from above)
const language = 'en_us';// The language to retrieve results in (default is en_us) (see http://en.wikipedia.org/wiki/ISO_639-1 for the language codes (first two characters) and http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes for the country codes (last two characters))
const format = 'JSON';
const dota2api = new Dota2Api(key, language, format);

class MatchController extends Controller {

  parseMatch(match_id){
    return new Promise(function(resolve, reject) {
      var config={
        match_id : match_id
      }
      dota2api.getMatchDetails(config, function(err, data) {
        if (err) {
          reject(err)
          throw err;
        } else {
          let match_processed = JSON.parse(data).result
          MatchModel.create(match_processed)
          resolve(match_processed)
        }
      })
    });
  }
}

module.exports = new MatchController(MatchModel);
