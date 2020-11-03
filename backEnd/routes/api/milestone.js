const express = require('express');
const passport = require('passport');
const router = express.Router();
const {getAllMilestoneAPI} = require('../../controller/milestone');
router.get('/list', getAllMilestoneAPI);

module.exports = router;
