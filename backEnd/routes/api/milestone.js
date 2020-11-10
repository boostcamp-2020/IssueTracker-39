const express = require('express');
const passport = require('passport');
const router = express.Router();
const {
  getAllMilestoneAPI,
  createMilestoneAPI,
  closeMilestoneAPI,
  updateMilestoneAPI,
} = require('../../controller/milestone');

router.get('/list', getAllMilestoneAPI);
router.post('/', createMilestoneAPI);
router.put('/close', closeMilestoneAPI);
router.put('/:id', updateMilestoneAPI);

module.exports = router;
