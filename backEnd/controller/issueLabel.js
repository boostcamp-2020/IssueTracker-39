const issueLabelService = require('../service/issueLabel');

const insertIssueLabel = async (req, res, next) => {
  const {issueIdx, labelIdx} = req.body;

  const result = await issueLabelService.insertIssueLabel({issueIdx, labelIdx});
  return result ? res.status(200).json({result: true}) : res.status(400);
};

const deleteIssueLabel = async (req, res, next) => {
  const {issueIdx, labelIdx} = req.body;
  const result = await issueLabelService.deleteIssueLabel({issueIdx, labelIdx});
  return result ? res.status(200).json({result: true}) : res.status(400);
};

module.exports = {
  insertIssueLabel,
  deleteIssueLabel,
};
