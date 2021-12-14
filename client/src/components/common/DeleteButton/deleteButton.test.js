import { render, screen, fireEvent } from '../../../utils/test.utils';
import { deleteBike } from '../../../redux/action.creators';
import actionTypes from '../../../redux/action.types';

import DeleteButton from './DeleteButton';

jest.mock('../../../redux/action.creators', () => ({
  ...jest.requireActual('../../../redux/action.creators'),
  deleteBike: jest.fn()
}));

describe('Given the component DeleteButton', () => {
  test('The component is rendered', () => {
    const data = 2;
    deleteBike.mockReturnValueOnce({ type: actionTypes.DELETE_BIKE, data });

    render(<DeleteButton />);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
