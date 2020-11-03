const {issues, users, labels, milestones} = require('../models/index');
// const getIssueList = async () => {
//   try {
//     const issueList = await issues.findAll({
//       attributes: [
//         'idx',
//         'author',
//         'title',
//         'createdTime',
//         'closedTime',
//         'status',
//       ],
//       include: [
//         {
//           model: users,
//           as: 'authorUser',
//           attributes: ['userId'],
//         },
//         {
//           model: milestones,
//           attributes: ['title'],
//         },
//         {
//           model: labels,
//           attributes: ['title', 'color'],
//         },
//       ],
//     });

//     return issueList;
//   } catch (e) {
//     /**
//      * @TODO
//      * 에러 throw | return false
//      */
//     return;
//   }
// };
const createWhereFilterOption = (filterParams) => {
  const {author, label, milestone, assignee} = filterParams;
  const includeFilter = [];
  const authorFilterObj = {
    model: users,
    as: 'authorUser',
    attribute: ['idx', 'userId'],
  };
  if (!!author) {
    authorFilterObj.where = {idx: author};
  }
  includeFilter.push(authorFilterObj);

  const assigneeFilterObj = {
    model: users,
    as: 'assigneeUser',
    attribute: ['idx', 'userId'],
  };
  if (!!assignee) {
    assigneeFilterObj.where = {idx: assignee};
  }
  includeFilter.push(assigneeFilterObj);

  const labelFilterObj = {
    model: labels,
  };
  if (!!label) {
    labelFilterObj.where = {idx: label};
  }
  includeFilter.push(labelFilterObj);

  const milestoneFilterObj = {
    model: milestones,
  };
  if (!!milestone) {
    milestoneFilterObj.where = {idx: milestone};
  }
  includeFilter.push(milestoneFilterObj);

  return includeFilter;
};

const getIssueList = async (filterParams) => {
  const includeFilter = createWhereFilterOption(filterParams);
  try {
    const issueList = await issues.findAll({
      attributes: [
        'idx',
        'author',
        'title',
        'createdTime',
        'closedTime',
        'status',
      ],
      include: [...includeFilter],
    });
    return issueList;
  } catch (e) {
    /**
     * @TODO
     * 에러 throw | return false
     */
    return;
  }
};
module.exports = {
  getIssueList,
};
