//^ agar koi bhi /users waali req aati hai to indexedDB.js se wo yaha par aaegi 
//^ yaha par aane ke baad hum humare user controller me pade functions ka use karenge 
const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users_controller');
router.get('/profile' , usersController.profile);
router.get('/sign-up' , usersController.signUp);
router.get('/sign-in' , usersController.signIn);
router.get('/post' , usersController.post);
module.exports = router;
