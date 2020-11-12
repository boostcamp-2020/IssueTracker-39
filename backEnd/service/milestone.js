const {milestones, issues} = require('../models/index');

const deleteMilestone = async (id) => {
  try {
    const result = milestones.destroy({
      where: {
        idx: id,
      },
    });
    return result;
  } catch (e) {
    console.error(e);
    throw new Error('delete Milestone Model에서 에러발생');
  }
};

const closeMilestone = async (id) => {
  try {
    const result = await milestones.update(
      {
        opened: false,
      },
      {
        where: {
          idx: id,
        },
      },
    );
    return result;
  } catch (e) {
    throw new Error('close Lable Error');
  }
};

const updateMilestone = async (milestone) => {
  const result = await milestones.update(
    {
      title: milestone.title,
      description: milestone.description,
      dueDate: milestone.dueDate,
    },
    {
      where: {
        idx: milestone.id,
      },
    },
  );
  return result;
};

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
        opened: mileStone.opened,
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

module.exports = {
  getAllMilestone,
  createMilestone,
  closeMilestone,
  updateMilestone,
  deleteMilestone,
};
