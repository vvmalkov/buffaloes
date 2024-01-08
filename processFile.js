const fs = require('fs');

const writeFile = (data) => {
  const processData = data.join('\n');
  fs.writeFileSync('./data/output.txt', processData, 'utf-8');
};

const readFile = (path) => {
  const data = fs.readFileSync(path, 'utf-8');
  return data;
};

const appendFile = (data) => {
  const processData = data.join('\n');
  fs.appendFileSync('./data/output.txt', `\n${processData}`, 'utf-8');
};

const readDir = (path) => fs.readdirSync(path);
// function readFile() {
//   const data = fs.readFileSync('./data/output.txt', 'utf-8');
//   return data;
// }
module.exports = {
  writeFile, readFile, appendFile, readDir,
};
