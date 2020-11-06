const {issues, users} = require('../models/index');

const getAuthorList = async () => {
  try {
    const authorList = await users.findAll({
      attributes: ['userId'],

      include: [
        {
          model: issues,
          as: 'issuesAuthor',
          attributes: [],
        },
      ],
    });

    return authorList;
  } catch (e) {
    /**
     * @TODO
     * 에러 throw | return false
     */
    return;
  }
};

module.exports = {
  getAuthorList,
};
