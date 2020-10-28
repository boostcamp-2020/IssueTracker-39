const issueService = require('../service/issue');

const getIssueList = async (req, res, next) => {
  const issueListResult = await issueService.getIssueList();
  if (!!!issueListResult) {
    res.status(400).send();
    return;
  }

  const issueList = {};
  Object.values(issueListResult).forEach(({dataValues: issue}) => {
    issueList[issue.idx] = issue;
  });
  res.json(issueList);
};
module.exports = {
  getIssueList,
};
