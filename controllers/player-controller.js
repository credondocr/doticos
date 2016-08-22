const Controller = require('../libraries/controller');
const PlayerModel  = require('../models/player-model');
const convertor = require('steam-id-convertor')
const request = require('request')
const redis = require('redis');
const config = require('../config/config')

const client = redis.createClient(process.env.REDIS_URL);

// HTTP layer, in this instance you can manage express request, response and next.
// In libraries/controller you have the basic RESTful methods find, findOne, findById,
// create, update and remove. Because this class is extending from there, you got that solved.
// You can overwrite extended methods or create custom ones here.

class PlayerController extends Controller {

  constructor (){
    super()
    client.on('connect', function() {
      console.log('connected');
    });
  }

  storePlayer(player) {
    player.steam_base_64_id = convertor.to64(player.account_id)
    PlayerModel.create(player)
  }

  sumMatches (team, isWinner, increment) {

    team.forEach((player) => {
      var conditions = { account_id: player }
      var update = isWinner ?
        { $addToSet: { "wins": increment } }
        :
        { $addToSet: { "losses": increment }}
      var promise = PlayerModel.find(conditions);
      promise.then((docs) => {
        docs.forEach((doc) => {
          var docPlayer = doc._doc
          PlayerModel.update({ _id: docPlayer._id}, update)
        })
      })
    })
  }

  updateScores(player){
    PlayerModel.find({ account_id: player.account_id}).then((docs) => {
      docs.forEach((doc) => {
        var data = doc._doc
        var total = data.wins.length + data.losses.length;

        PlayerModel.update(data._id, {wins_count: data.wins.length, losses_count: data.losses.length, winrate: data.wins.length * 100 / total } )
      })
    })
  }

  findSortedPlayers(res){
    PlayerModel.findAndSort({}).then((data) => {
      res.status(200).send(data)
    })
  }

  getAccountInformation(res, account_id) {

    client.get(account_id, function(err, reply) {
      console.log(reply);
      if(reply === null ){
        request('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + process.env.STEAM_API_KEY + '&steamids=' + account_id, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            client.set(account_id, body);
            res.status(200).send(body)
          } else {
            console.log(error)
          }
        })
      } else {
        res.status(200).send(reply)
      }

    });


  }


}

module.exports = new PlayerController(PlayerModel);
