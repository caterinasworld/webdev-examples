console.log('\n========== JavaScript Spread ==========\n');

const houses = [
  'Barantheon',
  'Bolton',
  'Florent',
  'Lannister',
  'Martell',
  'Stark',
  'Targaryen',
  'Tully',
];

console.log(houses);
// [
//   'Barantheon',
//   'Bolton',
//   'Florent',
//   'Lannister',
//   'Martell',
//   'Stark',
//   'Targaryen',
//   'Tully'
// ]

console.log(...houses);
// Barantheon Bolton Florent Lannister Martell Stark Targaryen Tully

const starks = ['Arya', 'Sansa', 'Jon', 'Bran'];
const characters = ['Daenerys', ...starks, 'Cersei', 'Jaime', 'Tyrion'];

console.log(characters);
// [
//   'Daenerys', 'Arya',
//   'Sansa',    'Jon',
//   'Bran',     'Cersei',
//   'Jaime',    'Tyrion'
// ]

console.log(...characters);
// Daenerys Arya Sansa Jon Bran Cersei Jaime Tyrion
