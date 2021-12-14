/* eslint-disable no-unused-vars */
import { render, screen, fireEvent } from '../../../utils/test.utils';
import { deleteBike } from '../../../redux/action.creators';
import actionTypes from '../../../redux/action.types';

import DeleteButton from './DeleteButton';

// jest.mock('../../../redux/action.creators', () => ({
//   ...jest.requireActual('../../../redux/action.creators'),
//   deleteBike: jest.fn()
// }));

// describe('Given the deleteButton component it should be rendered', () => {
//   const data = {
//     headers: {
//       'auth-token': 'token'
//     },
//     data: {
//       _id: 'id'
//     }
//   };
//   deleteBike.mockReturnValueOnce({ type: actionTypes.DELETE_BIKE, data });

//   render(<DeleteButton _id="1" token="1" />, { data });

//   test('when render the  icon should appear', () => {
//     const deleteButton = screen.getByPlaceholderText('delete-button');
//     fireEvent.click(deleteButton);
//     expect(screen.getByPlaceholderText(/delete-button/i)).toBeInTheDocument();
//   });
// });

describe('Given the deleteFavoriteButton component', () => {
  render(<DeleteButton _id="1" token="1" />);

  test('when render the star icon should appear', () => {
    const addFavoriteButton = screen.getByPlaceholderText('delete-button');
    fireEvent.click(addFavoriteButton);
    expect(screen.getByPlaceholderText(/delete-button/i)).toBeInTheDocument();
  });
});
