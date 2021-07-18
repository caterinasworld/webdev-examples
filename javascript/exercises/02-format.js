const formatItems = (input) => {
  // return a string of the concatenated numbers, separated by commas and with three digits after the decimal point

  // for reference, see the MDN Number page:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

  return input;
};

console.log(formatItems([5.1, 7.4, 3.3, 6.8, 3.0]));
// expected: '5.100, 7.400, 3.300, 6.800, 3.000'
console.log(formatItems([23.357649, 26.239465, 2.62962]));
// expected: '23.358, 26.239, 2.630'
