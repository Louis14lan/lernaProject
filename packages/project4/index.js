const _ = require('lodash');

const test4 = (a, b) => {
  console.log('test 4',  _.cloneDeep({ test3: 'hello' }));
  return a / b;
}

module.exports = {
  test4
}