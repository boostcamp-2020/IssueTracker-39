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
  let {
    Author: author,
    Label: label,
    Milestone: milestone,
    Assignee: assignee,
    Is: status,
  } = req.body;

  if (label) label = label.replace(/"/g, '');
  if (milestone) milestone = milestone.replace(/"/g, '');

  const issueListResult = await issueService.getIssueList({
    author,
    label,
    milestone,
    assignee,
    status, //open : 이슈 open // closed : 이슈 close // undefined: 둘다
  });
  res.json(issueListResult);
};

const getIssue = async (req, res, next) => {
  const idx = req.params.idx;
  const issue = await issueService.getIssue(idx);
  res.json(issue);
};

const updateTitle = async (req, res, next) => {
  const title = req.body.title;
  const idx = req.params.idx;
  const result = await issueService.updateIssueTitle(idx, title);
  res.json(result);
};

const updateContent = async (req, res, next) => {
  const context = req.body.content;
  const idx = req.params.idx;
  const result = await issueService.updateIssueContent(idx, context);
  res.json(result);
};

const updateOpen = async (req, res, next) => {
  const body = req.body;
  console.log(body);
  const result = await issueService.updateOpen(body);
  res.json(result);
};

const updateClose = async (req, res, next) => {
  const body = req.body;
  const result = await issueService.updateClose(body);
  res.json(result);
};

module.exports = {
  getIssueList,
  getIssue,
  updateTitle,
  updateContent,
  updateOpen,
  updateClose,
};
