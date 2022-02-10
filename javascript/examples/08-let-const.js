console.log('\n========== JavaScript let and const ==========\n');

if (true) {
  let arya = 'Arya';
  console.log(arya);
  // Arya

  arya = 'Arya Stark';
  console.log(arya);
  // Arya Stark

  let jon;
  jon = 'Jon Snow';
  console.log(jon);
  // Jon Snow
}

if (true) {
  const arya = 'Arya';
  console.log(arya);
  // Arya

  // arya = 'Arya Stark';
  // console.log(arya);
  // // TypeError: Assignment to constant variable

  // const jon;
  // jon = 'Jon Snow';
  // console.log(jon);
  // // Uncaught SyntaxError: Missing initializer in const declaration
}
