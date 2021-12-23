import axios from 'axios';

async function addBike(bike, header) {
  const url = 'http://localhost:3030';
  try {
    const res = await axios.post(`${url}/bikes/owned`, bike, header);
    return res;
  } catch (error) {
    return error;
  }
}

export {
  addBike
};
