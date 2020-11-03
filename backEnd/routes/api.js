const express = require('express');
const router = express.Router();

const issueRouter = require('./issue');
const authorRouter = require('./author');

router.use('/issue', issueRouter);
router.use('/author', authorRouter);

module.exports = router;
