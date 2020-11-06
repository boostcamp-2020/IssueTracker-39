const authorService = require('../service/author');

const getAuthorList = async (req, res, next) => {
  const authorListResult = await authorService.getAuthorList();
  if (!!!authorListResult) {
    res.status(400).send();
    return;
  }

  res.json(authorListResult);
};

module.exports = {
  getAuthorList,
};
