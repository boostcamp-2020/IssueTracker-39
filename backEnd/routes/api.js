const express = require('express');
const router = express.Router();

const issueRouter = require('./api/issue');
const authorRouter = require('./api/author');
const labelRouter = require('./api/label');
const assigneeRouter = require('./api/assignee');
const mielstoneRouter = require('./api/milestoone');
const commentRouter = require('./api/comment');

router.use('/issue', issueRouter);
router.use('/author', authorRouter);
router.use('/label', labelRouter);
router.use('/comment', commentRouter);
router.use('/assignee', assigneeRouter);
router.use('/mielstone', mielstoneRouter);

module.exports = router;
