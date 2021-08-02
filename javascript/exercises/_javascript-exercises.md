# JavaScript Exercises

- [Exercise 01 - Replace](#ex01)
- [Exercise 02 - Format](#ex02)
- [Exercise 03 - Objects](#ex03)
- [Exercise 04 - DOM](#ex04)
- [Exercise 05 - Destructuring](#ex05)
- [Exercise 06 - Fetch](#ex06)
- [Exercise 07 - Functional](#ex07)

## <a id="ex01"></a> Exercise 01 - Replace

Write a function `replaceItems` that takes in a string and returns a string where 'gold' is replaced by 'SHINY' and 'wander' is replaced by 'roam', regardless of the case of the letters.

```javascript
console.log(replaceItems('All that is gold does not glitter'));
// expected: 'All that is shiny does not glitter'
console.log(replaceItems('Not all those who Wander are lost'));
// expected: 'Not all those who roam are lost'
```

## <a id="ex02"></a> Exercise 02 - Format

Write a function `formatItems` that takes in an array of numbers and returns a string of the concatenated numbers, separated by commas and with each number having three digits after the decimal point.

```javascript
console.log(formatItems([1, 4, 17, 26, 41]));
// expected: '1.000, 4.000, 17.000, 26.000, 41.000'
console.log(formatItems([34.0, 12.0, 13.7, 760.1, 10.5]));
// expected: '34.000, 12.000, 13.700, 760.100, 10.500'
```

## <a id="ex03"></a> Exercise 03 - Objects

Create functions for adding, deleting, looking up, and printing the items of an object.

```javascript
insertItem('hello', 'world');
insertItem('lorem', 'ipsum');
insertItem('sit', 'amet');
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'ipsum'

deleteItem('lorem');
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'Item does not exist'
```

## <a id="ex04"></a> Exercise 04 - DOM

In this exercise, you will take in user input and output that data back to the output elements in the DOM.

Part 1 - When the user clicks the 'copy' button, copy the user input to the output area. Fetch the JavaScript objects representing specific elements in the DOM. Add an event listener on the target element. Write a callback function to handle the 'click' event.

Part 2 - When the user enters input text, copy the user input to the output area. Fetch the JavaScript objects representing specific elements in the DOM. Add an event listener on the target element. Write a callback function to handle the 'input' event.

## <a id="ex05"></a> Exercise 05 - Destructuring

Write a function `destructureItems` that takes in a character object, destructures the name and parents of the characters, and returns the output as shown.

```javascript
console.log(destructureItems(sansa));
// Sansa Stark
//   daughter of
//   Catelyn Tully and Eddard Stark
console.log(destructureItems(daenerys));
// Daenerys Targaryen
//   daughter of
//   Queen Rhaella and King Aerys II Targaryen
```

## <a id="ex06"></a> Exercise 06 - Fetch

Fetch all books from the API of Ice and Fire and append them to the DOM. To append a book, create an element that contains title, author, publication year, and number of pages for each entry. Using JavaScript, update the styles to center all the books in the container given.

<img src="../../_assets/javascript-exercises/javascript-ex06-fetch-01.png" height=200 alt="screenshot of the starting file with a spinner gif">
<img src="../../_assets/javascript-exercises/javascript-ex06-fetch-02.png" height=200 alt="screenshot of completed exercise, with a list of all game of thrones books">

## <a id="ex07"></a> Exercise 07 - Functional

Write a function `mapNameFamily` that takes in a characters array and returns an array with the name and house of each character.

```javascript
console.log(mapNameFamily(characters));
// [
//   'Arya, of House Stark',
//   'Sansa, of House Stark',
//   'Eddard, of House Stark',
//   'Catelyn, of House Stark',
//   'Robb, of House Stark',
//   'Rickon, of House Stark',
//   'Jaime, of House Lannister',
//   ...
// ]
```

Write a function `filterFamily` that takes in a characters array and a house name in string format, and returns an array with only the characters from House Stark.

```javascript
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
```

Write a function `reduceHouses` that takes in a characters array and returns an object with the number of characters from each house.

```javascript
console.log(reduceHouses(characters));
// {
//   Stark: 6,
//   Lannister: 5,
//   Targaryen: 3,
//   Greyjoy: 2,
//   Seaworth: 1,
//   Tarth: 1
// }
```
