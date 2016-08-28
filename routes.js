const config = require('./config/config')
const controllers = require('./controllers');
const Router = require('express').Router;
const router = new Router();

router.route('/players')
  .get((req, res) => controllers.player.findSortedPlayers(res))

router.route('/accountInfo/:account_id')
  .get((req, res) => controllers.player.getAccountInformation(res, req.params.account_id))



module.exports = router;
