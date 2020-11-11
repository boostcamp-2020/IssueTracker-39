const fs = require('fs');
function makeFolderIfNotExists(folderName) {
  fs.readdir(folderName, (error) => {
    if (error) {
      fs.mkdirSync(folderName);
    }
  });
}

module.exports = {
  makeFolderIfNotExists,
};
