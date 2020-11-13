const {labels} = require('../models/index');

const getAllLabel = async () => {
  try {
    const allLabel = await labels.findAll();
    return allLabel;
  } catch (e) {
    throw new Error('get All Label Error');
  }
};

const createLabel = async (params) => {
  const {title, description, color} = params;
  try {
    const createLabel = await labels.create({
      title: title,
      description: description,
      color: color,
    });
    return createLabel;
  } catch (e) {
    /**
     * @TODO
     * 에러 핸들링
     */
  }
};
const updateLabel = async (params) => {
  const {idx, title, description, color} = params;
  try {
    await labels.update(
      {
        title: title,
        description: description,
        color: color,
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
     * 에러 핸들링
     */
  }
};
const deleteLabel = async (idx) => {
  try {
    await labels.destroy({
      where: {
        idx,
      },
    });
    return true;
  } catch (e) {
    /**
     * @TODO
     * 에러 핸들링
     */
  }
};

module.exports = {
  getAllLabel,
  createLabel,
  updateLabel,
  deleteLabel,
};
