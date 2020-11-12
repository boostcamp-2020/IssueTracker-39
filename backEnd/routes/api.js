const express = require('express');
const router = express.Router();

const issueRouter = require('./api/issue');
const issueLabelRouter = require('./api/issueLabel');
const authorRouter = require('./api/author');
const labelRouter = require('./api/label');
const assigneeRouter = require('./api/assignee');
const milestoneRouter = require('./api/milestone');
const commentRouter = require('./api/comment');

router.use('/issue', issueRouter);
router.use('/issueLabel', issueLabelRouter);
router.use('/author', authorRouter);
router.use('/label', labelRouter);
router.use('/comment', commentRouter);
router.use('/assignee', assigneeRouter);
router.use('/milestone', milestoneRouter);

module.exports = router;
