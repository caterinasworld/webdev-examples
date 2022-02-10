console.log('\n========== JavaScript Arrays ==========\n');

const arraysExample1 = () => {
  let arr = [];
  // new Array();

  arr.push(1.0);
  arr.push(2.0);
  // [1, 2]

  arr.length;
  // 2

  arr[0];
  // 1

  arr[0] = 3.0;
  // [3, 2]

  arr[9] = 4.0;
  // [3, 2, empty × 7, 4]

  arr.length;
  // 10

  arr[2];
  // undefined

  arr.indexOf(1.0);
  // -1
  arr.indexOf(2.0);
  // 1

  arr = ['a', 'b', 'c'];
  // ['a', 'b', 'c']

  arr = ['a', 1.0, {}, ['b', 2.0]];
  // ['a', 1, {…}, Array(2)]

  console.log('========== forEach() ==========');
  arr.forEach((item) => console.log(item));
  // a
  // 1
  // Object {}
  // ['b', 2]
};

let arraysExample2 = () => {
  let houses = [
    'Barantheon',
    'Bolton',
    'Florent',
    'Lannister',
    'Martell',
    'Stark',
    'Targaryen',
    'Tully',
  ];

  // for loop
  console.log('\n========== for() loop ==========');
  for (let i = 0; i < houses.length; i++) {
    console.log(houses[i]);
  }

  // Barantheon
  // Bolton
  // Florent
  // Lannister
  // Martell
  // Stark
  // Targaryen
  // Tully

  console.log('\n========== forEach() ==========');
  houses.forEach((house) => {
    console.log(house);
  });

  // Barantheon
  // Bolton
  // Florent
  // Lannister
  // Martell
  // Stark
  // Targaryen
  // Tully

  console.log('\n========== forEach() - index & house ==========');
  houses.forEach((house, index) => {
    console.log(`${index + 1} - ${house}`);
  });

  // 1 - Barantheon
  // 2 - Bolton
  // 3 - Florent
  // 4 - Lannister
  // 5 - Martell
  // 6 - Stark
  // 7 - Targaryen
  // 8 - Tully

  console.log('\n========== For ... of() loop ==========');
  for (const house of houses) {
    console.log(house);
  }

  // Barantheon
  // Bolton
  // Florent
  // Lannister
  // Martell
  // Stark
  // Targaryen
  // Tully
};

arraysExample1();
arraysExample2();
