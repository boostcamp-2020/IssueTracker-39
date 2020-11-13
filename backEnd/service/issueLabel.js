const {issues, labels} = require('../models/index');

const insertIssueLabel = async ({issueIdx, labelIdx}) => {
  try {
    const searchedIssue = await issues.findByPk(issueIdx);
    const searchedLabel = await labels.findByPk(labelIdx);
    const result = await searchedIssue.addLabels(searchedLabel);

    return result;
  } catch (e) {}
};

const deleteIssueLabel = async ({issueIdx, labelIdx}) => {
  try {
    const searchedIssue = await issues.findByPk(issueIdx);
    const searchedLabel = await labels.findByPk(labelIdx);
    const result = await searchedIssue.removeLabels(searchedLabel);

    return result;
  } catch (e) {}
};

module.exports = {
  insertIssueLabel,
  deleteIssueLabel,
};
