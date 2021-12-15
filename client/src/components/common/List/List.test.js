/* eslint-disable import/no-unresolved */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../../redux/store/index';
import List from './List';

describe('Given the component AllBikesList', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      render(

        <Provider store={configureStore()}>
          <BrowserRouter>
            <List list={[{
              _id: '2222',
              make: 'Honda',
              bike_model: 'Varadero',
              class: '',
              owner: {
                province: 'Madrid'
              }
            }]}
            />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByText(/honda/i)).toBeInTheDocument();
      expect(screen.getAllByRole('link')).toHaveLength(1);
    });
  });
});
