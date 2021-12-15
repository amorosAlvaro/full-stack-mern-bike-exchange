import { render, screen } from '../../../utils/test.utils';
import CheckboxList from './CheckedList';

describe('Given the component CheckboxList', () => {
  describe('if hte component is rendered', () => {
    test('then login button  should be rendered', () => {
      render(<CheckboxList />);
      expect(screen.getAllByRole('button')).toHaveLength(4);
    });
  });
});
