import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import configureStore from '../../../redux/store/index';

describe('Given the component footer', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      render(
        <Provider store={configureStore()}>
          <Router>
            <Sidebar />
          </Router>
        </Provider>
      );

      expect(screen.getByText(/home/i)).toBeInTheDocument();
      expect(screen.getByText(/all bikes/i)).toBeInTheDocument();
      expect(screen.getByText(/favorite bikes/i)).toBeInTheDocument();
      expect(screen.getByText(/your bikes/i)).toBeInTheDocument();
      expect(screen.getByText(/add bike/i)).toBeInTheDocument();
    });
  });
});
