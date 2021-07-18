let arrayFunctionsExample = () => {
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
  console.group('for-loop');
  for (let i = 0; i < houses.length; i++) {
    console.log(houses[i]);
  }
  console.groupEnd();

  // Barantheon
  // Bolton
  // Florent
  // Lannister
  // Martell
  // Stark
  // Targaryen
  // Tully

  // forEach()
  console.group('forEach()');
  houses.forEach((house) => {
    console.log(house);
  });
  console.groupEnd();

  // Barantheon
  // Bolton
  // Florent
  // Lannister
  // Martell
  // Stark
  // Targaryen
  // Tully

  console.group('forEach() - index & house');
  houses.forEach((house, index) => {
    console.log(`${index + 1} - ${house}`);
  });
  console.groupEnd();

  // 1 - Barantheon
  // 2 - Bolton
  // 3 - Florent
  // 4 - Lannister
  // 5 - Martell
  // 6 - Stark
  // 7 - Targaryen
  // 8 - Tully

  console.group('for-of-loop');
  for (const house of houses) {
    console.log(house);
  }
  console.groupEnd();

  // Barantheon
  // Bolton
  // Florent
  // Lannister
  // Martell
  // Stark
  // Targaryen
  // Tully
};

arrayFunctionsExample();
