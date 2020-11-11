const express = require('express');
const router = express.Router();

const issueController = require('../../controller/issue');

/**
 * topPath : /issue
 */
router
  .get('/list', issueController.getIssueList)
  .post('/list', issueController.getIssueList)
  .get('/:idx', issueController.getIssue)
  .put('/title/:idx', issueController.updateTitle)
  .put('/content/:idx', issueController.updateContent);

module.exports = router;
