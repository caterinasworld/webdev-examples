const formatItems = (input) => {
  // return a string of the concatenated numbers, separated by commas and with three digits after the decimal point

  // for reference, see the MDN Number page:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

  // using forEach()
  //   let result = [];

  //   input.forEach((elem) => {
  //     result.push(elem.toFixed(3));
  //   });

  // using map()
  // let result = input.map((elem) => elem.toFixed(3));

  // return result.join(' - ');

  let results = [];

  for (const elem of input) {
    results.push(elem.toFixed(3));
  }

  return results.join(', ');
};

console.log(formatItems([5.1, 7.4, 3.3, 6.8, 3.0]));
// expected: '5.100, 7.400, 3.300, 6.800, 3.000'
console.log(formatItems([23.357649, 26.239465, 2.62962]));
// expected: '23.358, 26.239, 2.630'
