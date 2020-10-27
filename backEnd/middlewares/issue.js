const issueService = require('../service/issue');

const getIssueList = async (req, res, next) => {
  const issueListResult = await issueService.getIssueList();
  const issueList = {};
  Object.values(issueListResult).forEach(({dataValues: issue}) => {
    issueList[issue.idx] = issue;
  });
  /**
   * @todo
   * 서버 response convention 정하기
   */
  res.json({result: true, data: issueList});
};
module.exports = {
  getIssueList,
};
