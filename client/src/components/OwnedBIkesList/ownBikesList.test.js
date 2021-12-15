/* eslint-disable import/no-unresolved */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import OwnedBikesList from './OwnedBikesList';
import configureStore from '../../redux/store/index';

describe('Given the component AllBikesList', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      render(

        <Provider store={configureStore()}>
          <OwnedBikesList />
        </Provider>
      );
      expect(screen.getByText(/Your Bikes/i)).toBeInTheDocument();
    });
  });
});
