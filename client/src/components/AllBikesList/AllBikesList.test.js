import { render, screen } from '../../utils/test.utils';
import AllBikesList from './AllBikesList';
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
      const favorites = [
        {
          make: 'fav',
          owner: { name: 'fav' }
        }
      ];

      loadFavoriteBikes.mockReturnValueOnce({ type: actionTypes.LOAD_FAVORITES, favorites });
      render(<AllBikesList />, { favorites });
    });
  });
});
