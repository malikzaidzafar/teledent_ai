const express = require('express');
const router = express.Router();
const { testUserController } = require('../controllers/user.controller.js');

router.get('/test', testUserController);

module.exports = router;
