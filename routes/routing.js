var express = require("express");
var router = express.Router();

const UserController = require('../controllers/UserController');

router.route('/add').post(UserController.addUser);
router.route('/get/:id').get(UserController.findUser);
router.route('/all').get(UserController.Users);
router.route('/delete/:id').get(UserController.deleteUser);


module.exports = router;
