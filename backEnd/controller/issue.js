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
  const {
    Author: author,
    Label: label,
    Milestone: milestone,
    Assignee: assignee,
    Is: status,
  } = req.body;
  const issueListResult = await issueService.getIssueList({
    author,
    label,
    milestone,
    assignee,
    status, //open : 이슈 open // closed : 이슈 close // undefined: 둘다
  });
  res.json(issueListResult);
};

module.exports = {
  getIssueList,
};
