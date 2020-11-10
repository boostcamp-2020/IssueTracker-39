const express = require('express');
const passport = require('passport');
const router = express.Router();
const {
  getAllMilestoneAPI,
  createMilestoneAPI,
  closeMilestoneAPI,
} = require('../../controller/milestone');

router.get('/list', getAllMilestoneAPI);
router.post('/', createMilestoneAPI);
router.put('/close', closeMilestoneAPI);

module.exports = router;
