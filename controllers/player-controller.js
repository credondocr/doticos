const Controller = require('../libraries/controller');
const PlayerModel  = require('../models/player-model');

// HTTP layer, in this instance you can manage express request, response and next.
// In libraries/controller you have the basic RESTful methods find, findOne, findById,
// create, update and remove. Because this class is extending from there, you got that solved.
// You can overwrite extended methods or create custom ones here.

class PlayerController extends Controller {

  storePlayer(player) {
    player.wins =0
    player.losses = 0
    PlayerModel.create(player)
  }

  sumMatches (team, increment) {

    team.forEach((player) => {
      var conditions = { account_id: player }
      var update = { $inc: increment};
      var promise = PlayerModel.find(conditions);
      promise.then((docs) => {
        docs.forEach((doc) => {
          var docPlayer = doc._doc
          PlayerModel.update({ _id: docPlayer._id}, update)
          console.log('win ' + docPlayer.account_id)
        })
      })
    })

  }
}

module.exports = new PlayerController(PlayerModel);
