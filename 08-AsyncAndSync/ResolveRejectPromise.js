const failedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("operation failed !");
    }, 3000);
});

const successfulPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Operation succeeded!');
    }, 1000);
});
  
  
// consuming a promise

successfulPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// chaining 


successfulPromise
  .then((result) => {
    console.log(result); // Output: Operation succeeded!
    return 'New value';
  })
  .then((newValue) => {
    console.log(newValue); // Output: New value
  })
  .catch((error) => {
    console.error(error);
  });

