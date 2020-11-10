const express = require('express');
const passport = require('passport');
const router = express.Router();
const {
  getAllMilestoneAPI,
  createMilestoneAPI,
} = require('../../controller/milestone');

router.get('/list', getAllMilestoneAPI);
router.post('/', createMilestoneAPI);

module.exports = router;
