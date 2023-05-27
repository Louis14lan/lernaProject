const _ = require('lodash');

const test2 = (a, b) => {
  console.log('test 2222',  _.cloneDeep({ test2: 'hello' }));
  return a + b;
}

module.exports = {
  test2
}