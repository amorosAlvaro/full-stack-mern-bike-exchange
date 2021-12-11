import axios from 'axios';

async function addBike(bike, header) {
  const url = 'http://localhost:3030';
  try {
    await axios.post(`${url}/bikes/owned`, bike, header);
  } catch (error) {
    console.log(error);
  }
}

// async function deleteBike(config) {
//   const url = 'http://localhost:3030';
//   console.log('Service input:', config);
//   try {
//     await axios.delete(`${url}/bikes/owned`, config);
//   } catch (error) {
//     console.log('error in service');
//   }
// }

// async function addBikeToFavorite(data, headers) {
//   const url = 'http://localhost:3030';
//   console.log('Service input:', data, headers);
//   try {
//     await axios.post(`${url}/bikes/favorite`, data, headers);
//   } catch (error) {
//     console.log('error in service');
//   }
// }

// async function deleteBikeFromFavorite(config) {
//   const url = 'http://localhost:3030';
//   console.log('Service input:', config);
//   try {
//     await axios.delete(`${url}/bikes/favorite`, config);
//   } catch (error) {
//     console.log('error in service');
//   }
// }

export {
  addBike
};
