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
  }
};

asyncAwaitExample();
