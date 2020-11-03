const express = require('express');
const router = express.Router();
const assigneeController = require('../../controller/assignee');

router.get('/list', assigneeController.getAllAssignee);

module.exports = router;
