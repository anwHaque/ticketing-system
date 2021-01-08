const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const {signup} = require('../controllers/user');


router.post('/signup', signup);


module.exports = router;