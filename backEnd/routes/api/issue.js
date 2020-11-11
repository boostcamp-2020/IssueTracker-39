const express = require('express');
const router = express.Router();

const issueController = require('../../controller/issue');

/**
 * topPath : /issue
 */
router.post('/', issueController.makeIssue);

router
  .get('/list', issueController.getIssueList)
  .post('/list', issueController.getIssueList)
  .get('/:idx', issueController.getIssue);

module.exports = router;
