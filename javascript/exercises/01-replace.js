const replaceItems = (input) => {
  // return input with 'quick' replaced by 'sly' and 'lazy' replaced by 'sharp', regardless of the case of the letters

  // for reference, see the MDN "Regular Expressions" entry:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

  return input;
};

console.log(replaceItems('the QUICK brown fox is quick'));
// expected: 'the sly brown fox is sly'
console.log(replaceItems('jumps OVER the lazy dog'));
// expected: 'jumps OVER the sharp dog'
