const express = require('express');
const passport = require('passport');
const router = express.Router();
const {getAllLabelAPI} = require('../controller/label');
router.get('/list', getAllLabelAPI);

module.exports = router;
