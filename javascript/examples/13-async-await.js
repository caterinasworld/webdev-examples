let asyncAwaitExample = async () => {
  let promise = new Promise((resolve, reject) => {
    if (true) {
      resolve('Successful promise.');
    } else {
      reject('Error: Something went wrong.');
    }
  });

  try {
    let response = await promise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

asyncAwaitExample();
