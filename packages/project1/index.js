const _ = require('lodash');

const test1 = (a, b) => {
  console.log('test 1111',  _.cloneDeep({ test1: 'hello' }));
  return a - b;
}

test1(6,2);
module.exports = {
  test1
};