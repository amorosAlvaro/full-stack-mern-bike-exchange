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
    test('then it should be rendered and loadBikes should be called', () => {
      const bikes = [
        {
          make: 'honda',
          owner: { name: 'pepe' }
        }
      ];
      const favorites = [
        {
          make: 'fav',
          owner: { name: 'fav' }
        }
      ];
      loadBikes.mockReturnValueOnce({ type: actionTypes.LOAD_BIKES, bikes });

      render(

        <AllBikesList />
      );
      expect(screen.getByText(/honda/i)).toBeInTheDocument();
    });
  });
});
