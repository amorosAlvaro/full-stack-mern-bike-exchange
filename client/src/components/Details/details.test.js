import { render, screen } from '../../utils/test.utils';
import Details from './Details';
import { loadBikeById } from '../../redux/action.creators';
import actionTypes from '../../redux/action.types';

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
