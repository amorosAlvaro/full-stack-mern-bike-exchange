/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { render, screen } from '../../utils/test.utils';
import AllBikesList from './AllBikesList';
import addBike from '../../services/bike.services';
import actionTypes from '../../redux/action.types';
import { loadBikes, loadFavoriteBikes } from '../../redux/action.creators';

jest.mock('../../redux/action.creators', () => ({
  ...jest.requireActual('../../redux/action.creators'),
  loadBikes: jest.fn(),
  loadFavoriteBikes: jest.fn()
}));

describe('Given the component AllBikesList', () => {
  describe('when component is instantiated', () => {
    const bikes = [
      {
        make: 'honda',
        owner: { name: 'pepe' }
      }
    ];

    loadBikes.mockReturnValueOnce({ type: actionTypes.LOAD_BIKES, bikes });
    render(<AllBikesList />, { bikes });

    test('then it should be rendered and loadBikes should be called', () => {
      expect(screen.getByText(/honda/i)).toBeInTheDocument();
    });
    test('If users is logged in, Get Favorite Bikes should be called', () => {
      const token = '222';
      const favorites = [
        {
          make: 'fav',
          owner: { name: 'fav' }
        }
      ];
      const headers = {
        headers: {
          'auth-token': token
        }
      };
      loadFavoriteBikes.mockReturnValueOnce({ type: actionTypes.LOAD_FAVORITES, favorites });
      render(<AllBikesList />, { favorites });
    });
  });
});
