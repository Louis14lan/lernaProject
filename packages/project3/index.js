const _ = require('lodash');
const { test2 } = require('project2');

const test3 = (a, b) => {
  console.log('test 3 test',  _.cloneDeep({ test3: 'hello' }));
  return a * b;
}

test2();

module.exports = {
  test3
}