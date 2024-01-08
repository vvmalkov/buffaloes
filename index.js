const {
  writeFile, readFile, appendFile, readDir,
} = require('./processFile');
const { getRandomNames, getRandomAddress } = require('./generator');

// console.log(process.argv);

// const count = process.argv[2];
// const data = getRandomNames(count);

// writeFile(data);
// appendFile(data);

// console.log(readDir('./'));
// console.log(readDir(__dirname));
// console.log(readFile('./data/output.txt'));
// console.log(readFile(`${__dirname}/data/output.txt`));
