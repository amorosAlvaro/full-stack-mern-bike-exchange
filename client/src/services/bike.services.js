import axios from 'axios';

async function addBike(bike, header) {
  const url = 'http://localhost:3030';
  try {
    await axios.post(`${url}/bikes/owned`, bike, header);
  } catch (error) {
    console.log(error);
  }
}

async function deleteBike(_id, header) {
  const url = 'http://localhost:3030';
  console.log('servicio', _id, header);
  try {
    await axios.delete(`${url}/bikes/owned`, header, _id);
  } catch (error) {
    console.log('error in service');
  }
}

export { addBike, deleteBike };
