const fs = require("fs");

function createLog(data) {
  try {
    const currentData = new Date();
    const fileName = `logs/${currentData.getFullYear()}${currentData.getMonth()}${currentData.getDate()}-bin-logs.txt`;
    const dataToAppend = `[START]\n${data}\n[END]`;

    // Check if the file exists
    fs.access(fileName, fs.constants.F_OK, (err) => {
      if (err) {
        // File doesn't exist, create it and append data
        fs.writeFile(fileName, dataToAppend, (err) => {
          if (err) {
            console.error("Error creating the file:", err);
          }
        });
      } else {
        // File exists, append data
        fs.appendFile(fileName, dataToAppend, (err) => {
          if (err) {
            console.error("Error appending data to the file:", err);
          } else {
            console.log(`Data appended to '${fileName}'.`);
          }
        });
      }
    });
  } catch (error) {
    console.log(error, "[General error occured while appending file]");
  }
}

module.exports = createLog;
