const {
  issues,
  users,
  labels,
  milestones,
  sequelize,
} = require('../models/index');
const {Op, where} = require('sequelize');
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

const getIssue = async (idx) => {
  try {
    const Issue = await issues.findOne({
      where: {idx: idx},
      include: [
        {model: users, as: 'authorUser', attributes: ['idx', 'userId']},
        {
          model: users,
          as: 'assigneeUser',
          attributes: ['idx', 'userId'],
        },
        {
          model: milestones,
        },
        {
          model: labels,
        },
      ],
    });
    return Issue;
  } catch (e) {
    /**
     * @todo
     * 에러
     */
  }
};

const getUserId = (user) => {
  const {
    dataValues: {userId},
  } = user;
  return userId;
};
const updateIssueTitle = async (idx, title) => {
  try {
    await issues.update(
      {
        title: title,
      },
      {
        where: {
          idx,
        },
      },
    );
    return true;
  } catch (e) {
    /**
     * @TODO
     * 에러 핸들러
     */
  }
};

const updateIssueContent = async (idx, content) => {
  try {
    await issues.update(
      {
        content: content,
      },
      {
        where: {
          idx: idx,
        },
      },
    );
    return true;
  } catch (e) {
    /**
     * @TODO
     */
  }
};

const updateOpen = async (body) => {
  try {
    await issues.update(
      {
        status: 1,
      },
      {
        where: {
          idx: {
            [Op.in]: body,
          },
        },
      },
    );
    return true;
  } catch (e) {}
};

const updateClose = async (body) => {
  try {
    await issues.update(
      {
        status: 0,
      },
      {
        where: {
          idx: {
            [Op.in]: body,
          },
        },
      },
    );
    return true;
  } catch (e) {}
};

module.exports = {
  getIssueList,
  getIssue,
  getUserId,
  updateIssueTitle,
  updateIssueContent,
  updateOpen,
  updateClose,
};
