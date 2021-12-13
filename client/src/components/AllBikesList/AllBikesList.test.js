/* eslint-disable import/no-unresolved */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import AllBikesList from './AllBikesList';
import configureStore from '../../redux/store/index';

describe('Given the component AllBikesList', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      render(

        <Provider store={configureStore()}>
          <AllBikesList />
        </Provider>
      );
      expect(screen.getByText(/All Bikes/i)).toBeInTheDocument();
    });
  });
});
