console.log('\n========== JavaScript async/await ==========\n');

const asyncAwaitExample = async () => {
  const promise = new Promise((resolve, reject) => {
    if (true) {
      resolve('Successful promise.');
    } else {
      reject('Error: Something went wrong.');
    }
  });

  try {
    const response = await promise;
    console.log(response);
  } catch (error) {
    console.error(error);
  } finally {
    console.log(
      'This code will execute whether the promise is fulfilled or rejected.'
    );
  }
};

asyncAwaitExample();
