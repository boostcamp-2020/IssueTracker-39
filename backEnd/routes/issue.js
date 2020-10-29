const express = require('express');
const router = express.Router();

const issueController = require('../controller/issue');

/**
 * topPath : /issue
 */

router.get('/list', issueController.getIssueList);

module.exports = router;
