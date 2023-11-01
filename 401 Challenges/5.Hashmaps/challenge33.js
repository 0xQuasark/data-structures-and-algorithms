const HashTable = require('../5.Hashmaps/index.js');

function leftJoinHashMap(leftHash, rightHash) {

  let output = [];

  for (key of leftHash.keys()) {
    let line = [];
    line.push(key);
    // console.log('pushed key', key)
    line.push(leftHash.get(key).toString().split(':')[1]);
    if (rightHash.has(key)) {
      // console.log('FOUND', key);
      line.push(rightHash.get(key).toString().split(':')[1]);
    } else {
      line.push(null);
    }
    output.push(line);
    // console.log(leftHash, rightHash);
  }
  return output;
}

module.exports = leftJoinHashMap;
