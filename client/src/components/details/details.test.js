/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
// import { Provider } from 'react-redux';
// import { Router, BrowserRouter } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
import { render, screen } from '../../utils/test.utils';
// import configureStore from '../../redux/store/index';
import Details from './Details';
import { loadBikeById } from '../../redux/action.creators';
import actionTypes from '../../redux/action.types';
// import { render } from '../../utilsNoRouter/test.utils.noRouter';

// jest.mock('../../redux/action.creators');

jest.mock('../../redux/action.creators', () => ({
  ...jest.requireActual('../../redux/action.creators'),
  loadBikeById: jest.fn()
}));

describe('Testing Details rendering', () => {
  const bikes = [
    {
      make: 'honda',
      owner: { name: 'pepe' }
    }
  ];
  loadBikeById.mockReturnValueOnce({ type: actionTypes.LOAD_BIKES, bikes });
  render(<Details />, { bikes });

  test('Should be rendered', () => {
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/pepe/i)).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(1);
  });
});
