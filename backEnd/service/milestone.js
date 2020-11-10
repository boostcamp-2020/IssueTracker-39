const {milestones, issues} = require('../models/index');

const createMilestone = async (milestone) => {
  const result = await milestones.create({
    title: milestone.title,
    description: milestone.description,
    dueDate: milestone.dueDate,
  });

  return result;
};

const getAllMilestone = async () => {
  try {
    const allMilestone = await milestones.findAll({
      include: [
        {
          model: issues,
          attributes: ['closedTime', 'closedTime'],
        },
      ],
    });
    const data = [];
    allMilestone.forEach((mileStone, index) => {
      let refinedData = {
        idx: mileStone.idx,
        title: mileStone.title,
        description: mileStone.description,
        dueDate: mileStone.dueDate,
      };
      refinedData.openedIssues = mileStone.issues.reduce((acc, curr) => {
        if (curr.closedTime === null) {
          return acc + 1;
        }
        return acc;
      }, 0);

      refinedData.closedIssues =
        mileStone.issues.length - refinedData.openedIssues;

      data.push(refinedData);
    }, []);

    return data;
  } catch (err) {
    throw new Error('Error get All Milestone');
  }
};

module.exports = {getAllMilestone, createMilestone};
