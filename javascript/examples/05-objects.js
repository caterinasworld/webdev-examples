let objectsExample = () => {
  const houses = {
    Barantheon: 'Ours is the Fury',
    Greyjoy: 'We Do Not Sow',
    Martell: 'Unbowed, Unbent, Unbroken',
    Stark: 'Winter is Coming',
  };

  const keys = Object.keys(houses);
  console.log(keys);
  // [ "Barantheon", "Greyjoy", "Martell", "Stark" ]

  const values = Object.values(houses);
  console.log(values);
  // [
  //   'Ours is the Fury',
  //   'We Do Not Sow',
  //   'Unbowed, Unbent, Unbroken',
  //   'Winter is Coming'
  // ]

  const entries = Object.entries(houses);
  console.log(entries);
  // [ "Barantheon", "Ours is the Fury" ]​
  // [ "Greyjoy", "We Do Not Sow" ]
  // [ "Martell", "Unbowed, Unbent, Unbroken" ]
  // [ "Stark", "Winter is Coming" ]

  for (const [house, words] of entries) {
    console.log(`House ${house}'s motto: ${words}`);
  }
  // House Barantheon's motto: Ours is the Fury
  // House Greyjoy's motto: We Do Not Sow
  // House Martell's motto: Unbowed, Unbent, Unbroken
  // House Stark's motto: Winter is Coming
};

objectsExample();
