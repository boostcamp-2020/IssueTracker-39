const express = require('express');
const router = express.Router();
const issueLabelController = require('../../controller/issueLabel');

/**
 * top: /api/issueLabel
 */

router
  .post('/', issueLabelController.insertIssueLabel)
  .delete('/', issueLabelController.deleteIssueLabel);

module.exports = router;
