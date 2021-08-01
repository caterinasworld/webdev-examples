const characters = [
  { id: 1, name: 'Arya', house: 'Stark' },
  { id: 4, name: 'Sansa', house: 'Stark' },
  { id: 16, name: 'Eddard', house: 'Stark' },
  { id: 17, name: 'Catelyn', house: 'Stark' },
  { id: 20, name: 'Robb', house: 'Stark' },
  { id: 28, name: 'Rickon', house: 'Stark' },
  { id: 40, name: 'Jaime', house: 'Lannister' },
  { id: 41, name: 'Cersei', house: 'Lannister' },
  { id: 42, name: 'Tyrion', house: 'Lannister' },
  { id: 50, name: 'Tywin', house: 'Lannister' },
  { id: 53, name: 'Kevan', house: 'Lannister' },
  { id: 75, name: 'Daenerys', house: 'Targaryen' },
  { id: 77, name: 'Viserys', house: 'Targaryen' },
  { id: 81, name: 'Rhaegar', house: 'Targaryen' },
  { id: 83, name: 'Theon', house: 'Greyjoy' },
  { id: 84, name: 'Yara', house: 'Greyjoy' },
  { id: 87, name: 'Davos', house: 'Seaworth' },
  { id: 88, name: 'Brienne', house: 'Tarth' },
];

const mapNameFamily = (characters) => {
  // Return an array with the name and house of each character
  // Format: "Arya, of House Stark"

  return characters;
};

const filterFamily = (characters, house) => {
  // Return an array with only the characters from a given house

  return characters;
};

const reduceHouses = (characters) => {
  // Return an object with the number of characters from each house

  return characters;
};

console.log(mapNameFamily(characters));
// [
//   'Arya, of House Stark',
//   'Sansa, of House Stark',
//   'Eddard, of House Stark',
//   'Catelyn, of House Stark',
//   'Robb, of House Stark',
//   'Rickon, of House Stark',
//   'Jaime, of House Lannister',
//   'Cersei, of House Lannister',
//   'Tyrion, of House Lannister',
//   'Tywin, of House Lannister',
//   'Kevan, of House Lannister',
//   'Daenerys, of House Targaryen',
//   'Viserys, of House Targaryen',
//   'Rhaegar, of House Targaryen',
//   'Theon, of House Greyjoy',
//   'Yara, of House Greyjoy',
//   'Davos, of House Seaworth',
//   'Brienne, of House Tarth'
// ]

console.log(filterFamily(characters, 'Stark'));
// [
//   { id: 1, name: 'Arya', house: 'Stark' },
//   { id: 4, name: 'Sansa', house: 'Stark' },
//   { id: 16, name: 'Eddard', house: 'Stark' },
//   { id: 17, name: 'Catelyn', house: 'Stark' },
//   { id: 20, name: 'Robb', house: 'Stark' },
//   { id: 28, name: 'Rickon', house: 'Stark' }
// ]

console.log(filterFamily(characters, 'Greyjoy'));
// [
//   { id: 83, name: 'Theon', house: 'Greyjoy' },
//   { id: 84, name: 'Yara', house: 'Greyjoy' }
// ]

console.log(reduceHouses(characters));
// {
//   Stark: 6,
//   Lannister: 5,
//   Targaryen: 3,
//   Greyjoy: 2,
//   Seaworth: 1,
//   Tarth: 1
// }
