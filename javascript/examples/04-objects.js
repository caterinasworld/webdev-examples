console.log('\n========== JavaScript Objects ==========\n');

const objectsExample1 = () => {
  let obj = {
    a: 'hello',
    b: 1.0,
    c: {
      d: true,
    },
  };
  // {a: 'hello', b: 1, c: {…}}
  // a: "hello"
  // b: 1
  // c: {d: true}

  obj.f = 'world';
  obj['g'] = 2.0;
  obj.h = {
    i: false,
  };
  // {a: 'hello', b: 1, c: {…}, f: 'world', g: 2, …}
  // a: "hello"
  // b: 1
  // c: {d: true}
  // f: "world"
  // g: 2
  // h: {i: false}

  obj.a;
  // 'hello'
  obj['b'];
  // 1
  obj.c.d;
  // true
  obj.f;
  // undefined

  delete obj.a;
  obj.hasOwnProperty('a');
  // false
};

let objectsExample2 = () => {
  const houses = {
    Barantheon: 'Ours is the Fury',
    Greyjoy: 'We Do Not Sow',
    Martell: 'Unbowed, Unbent, Unbroken',
    Stark: 'Winter is Coming',
  };

  console.log('========== Original object ==========');
  console.log(houses);

  const keys = Object.keys(houses);

  console.log('\n========== Keys ==========');
  console.log(keys);
  // [ "Barantheon", "Greyjoy", "Martell", "Stark" ]

  const values = Object.values(houses);

  console.log('\n========== Values ==========');
  console.log(values);
  // [
  //   'Ours is the Fury',
  //   'We Do Not Sow',
  //   'Unbowed, Unbent, Unbroken',
  //   'Winter is Coming'
  // ]

  const entries = Object.entries(houses);

  console.log('\n========== Entries ==========');
  console.log(entries);
  // [ "Barantheon", "Ours is the Fury" ]​
  // [ "Greyjoy", "We Do Not Sow" ]
  // [ "Martell", "Unbowed, Unbent, Unbroken" ]
  // [ "Stark", "Winter is Coming" ]

  console.log('\n========== For ... of loop ==========');
  for (const [house, words] of entries) {
    console.log(`House ${house}'s motto: ${words}`);
  }
  // House Barantheon's motto: Ours is the Fury
  // House Greyjoy's motto: We Do Not Sow
  // House Martell's motto: Unbowed, Unbent, Unbroken
  // House Stark's motto: Winter is Coming
};

objectsExample1();
objectsExample2();
