const fetchUser = () =>
  new Promise(resolve => setTimeout(() => resolve({ name: 'John' }), 100));

async function showUser() {
  try {
    const user = await fetchUser();
    console.log(user.name); // => John
  } catch (error) {
    console.error(error);
  }
}

showUser();
