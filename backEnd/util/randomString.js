const crypto = require('crypto');
function randomString(filename) {
  const date = new Date().valueOf().toString();
  const randomSeed = Math.ceil(Math.random() * 10000000).toString();
  return crypto
    .createHash('sha1')
    .update(date + randomSeed + filename)
    .digest('base64')
    .replace(/\//g, '');
}

module.exports = {
  randomString,
};
