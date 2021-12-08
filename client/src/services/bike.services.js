import axios from 'axios';

async function addBike(bike, header) {
  const url = 'http://localhost:3030';
  try {
    await axios.post(`${url}/bikes/owned`, bike, header);
  } catch (error) {
    console.log(error);
  }
}

export { addBike };
