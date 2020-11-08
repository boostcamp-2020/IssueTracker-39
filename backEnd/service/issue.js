const {
  issues,
  users,
  labels,
  milestones,
  sequelize,
} = require('../models/index');
const {Op} = require('sequelize');
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
  const {author, label, milestone, assignee, status} = filterParams;
  const includeFilter = [];
  const issueCondition =
    status === undefined
      ? {}
      : status === 'open'
      ? {status: true}
      : {status: false};
  let issueLiteralCondition = '';

  const authorFilterObj = {
    model: users,
    as: 'authorUser',
    attributes: ['idx', 'userId'],
  };
  if (!!author) {
    authorFilterObj.where = {userId: author};
  }
  includeFilter.push(authorFilterObj);

  const assigneeFilterObj = {
    model: users,
    as: 'assigneeUser',
    attributes: ['idx', 'userId'],
  };

  if (assignee === 'no') {
    issueLiteralCondition += 'assigneeUser.idx Is NULL ';
  } else if (!!assignee) {
    assigneeFilterObj.where = {userId: assignee};
  }
  includeFilter.push(assigneeFilterObj);

  const labelFilterObj = {
    model: labels,
  };
  if (label === 'no') {
    issueLiteralCondition +=
      issueLiteralCondition === ''
        ? 'labels.idx Is NULL'
        : 'AND labels.idx Is NULL';
  } else if (!!label) {
    labelFilterObj.where = {title: label};
  }
  includeFilter.push(labelFilterObj);

  const milestoneFilterObj = {
    model: milestones,
  };
  if (milestone === 'no') {
    issueCondition.milestoneIdx = {[Op.is]: null};
  } else if (!!milestone) {
    milestoneFilterObj.where = {title: milestone};
  }
  includeFilter.push(milestoneFilterObj);
  issueCondition.where = sequelize.literal(issueLiteralCondition);
  return {includeFilter, where: issueCondition};
};

const getIssueList = async (filterParams) => {
  const {includeFilter, where} = createWhereFilterOption(filterParams);

  try {
    const issueList = await issues.findAll({
      attributes: ['idx', 'title', 'createdTime', 'closedTime', 'status'],
      order: [['createdTime', 'desc']],
      where,
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
