const express = require('express');
const router = express.Router();

const issueRouter = require('./issue');
const authorRouter = require('./author');
const labelRouter = require('./label');
const assigneeRouter = require('./assignee');
const mielstoneRouter = require('./milestoone');

router.use('/issue', issueRouter);
router.use('/author', authorRouter);
router.use('/label', labelRouter);
router.use('/assignee', assigneeRouter);
router.use('/mielstone', mielstoneRouter);

module.exports = router;
