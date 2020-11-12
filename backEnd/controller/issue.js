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
  if (author === '@me') author = issueService.getUserId(req.user);
  if (assignee === '@me') assignee = issueService.getUserId(req.user);
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

const uploadImage = async (req, res, next) => {
  res.json({
    filename: `!{(${req.file.filename})}`,
  });
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

const makeIssue = async (req, res, next) => {
  /**
   * label과 assignee 모두 idx의 배열,
   */
  let {
    Title: title,
    Content: content,
    Author: author,
    Label: label,
    Milestone: milestone,
    Assignee: assignee,
  } = req.body;

  const makeIssueResult = await issueService.makeIssue({
    title,
    content,
    author,
    label,
    milestone,
    assignee,
  });

  res.json(makeIssueResult);
};

module.exports = {
  getIssueList,
  getIssue,
  uploadImage,
  updateTitle,
  updateContent,
  updateOpen,
  updateClose,
  makeIssue,
};
