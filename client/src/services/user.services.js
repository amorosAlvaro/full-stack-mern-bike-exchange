import axios from 'axios';

async function registerUser(user) {
  const url = 'http://localhost:3030';
  try {
    await axios.post(`${url}/users`, user);
  } catch (error) {
    console.log(error);
  }
}

export { registerUser };
