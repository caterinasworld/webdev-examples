console.log('\n========== JavaScript JSON ==========\n');

const obj = {
  name: 'Spongebob Squarepants',
  height: '4',
  color: 'yellow with green holes',
  eyes: 'blue',
  occupation: 'fry cook',
};

const result = JSON.stringify(obj);

console.log('================');
console.log(`JSON.stringify() - object --> string`);
console.log(result);

// "{\"name\":\"Spongebob Squarepants\",\"height\":\"4\",\"color\":\"yellow with green holes\",\"eyes\":\"blue\",\"occupation\":\"fry cook\"}"

const data = JSON.parse(result);

console.log('================');
console.log(`JSON.parse() - string --> object`);
console.log(data);
// {
//    name: "Spongebob Squarepants",
//    height: "4",
//    color: "yellow with green holes",
//    eyes: "blue",
//    occupation: "fry cook"
// }
