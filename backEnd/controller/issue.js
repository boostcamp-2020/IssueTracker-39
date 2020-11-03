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
  const {author, label, milestone, assignee} = req.body;
  const issueListResult = await issueService.getIssueList({
    author,
    label,
    milestone,
    assignee,
  });
  res.json(issueListResult);
};

module.exports = {
  getIssueList,
};
