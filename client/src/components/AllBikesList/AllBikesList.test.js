/* eslint-disable import/no-unresolved */
import { Provider } from 'react-redux';
import { render, screen } from '../../utils/test.utils';
import AllBikesList from './AllBikesList';
import configureStore from '../../redux/store/index';

describe('Given the component AllBikesList', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      render(

        <AllBikesList />
      );
      expect(screen.getByText(/All Bikes/i)).toBeInTheDocument();
    });
  });
});
