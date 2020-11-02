const {labels} = require('../models/index');

const getAllLabel = async () => {
  try {
    const allLabel = await labels.findAll();
    return allLabel;
  } catch (e) {
    throw new Error('get All Label Error');
  }
};

module.exports = {
  getAllLabel,
};
