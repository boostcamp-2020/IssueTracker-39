const issueService = require('../service/issue');

// const getIssueList = async (req, res, next) => {
//   const issueListResult = await issueService.getIssueList();
//   if (!!!issueListResult) {
//     res.status(400).send();
//     return;
//   }

//   const issueList = [];
//   Object.values(issueListResult).forEach(({dataValues: issue}) => {
//     issueList.push(issue);
//   });
//   res.json(issueList);
// };

/**
 * author: integer (idx)
 * label: integer (idx)
 * milestone: integer (idx)
 * assignee: integer (idx)
 */
const getIssueList = async (req, res, next) => {
  const {author, label, milestone, assignee, status} = req.body;
  const issueListResult = await issueService.getIssueList({
    author,
    label,
    milestone,
    assignee,
    status, //true : 이슈 open, false : 이슈 false
  });
  res.json(issueListResult);
};

module.exports = {
  getIssueList,
};
