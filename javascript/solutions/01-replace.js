const replaceItems = (input) => {
  // return input with 'quick' replaced by 'sly' and 'lazy' replaced by 'sharp', regardless of the case of the letters

  // for reference, see the MDN "Regular Expressions" entry:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

  input = input.replace(/quick/gi, 'sly');
  input = input.replace(/lazy/gi, 'sharp');

  // input = input.replace(/quick/gi, 'sly').replace(/lazy/gi, 'sharp');

  return input;

  // return input.replace(/quick/gi, 'sly').replace(/lazy/gi, 'sharp');
};

console.log(replaceItems('the QUICK brown fox is quick'));
// expected: 'the sly brown fox is sly'
console.log(replaceItems('jumps OVER the lazy dog'));
// expected: 'jumps OVER the sharp dog'
