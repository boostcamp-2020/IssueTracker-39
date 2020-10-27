const express = require('express');
const router = express.Router();

const issueMiddleware = require('../middlewares/issue');

/**
 * topPath : /issue
 */

router.get('/list', issueMiddleware.getIssueList);

module.exports = router;
