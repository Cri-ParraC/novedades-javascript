let isLoading = true;

Promise.resolve('data')
  .then(result => console.log(result)) // => data
  .catch(error => console.error(error))
  .finally(() => {
    isLoading = false;
    console.log(isLoading); // => false (runs on success and on failure)
  });
