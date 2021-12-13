import { render, screen } from '../../../utils/test.utils';
import Header from './Header';

describe('Given the component footer', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      render(<Header />);
      expect(screen.getAllByRole('img')).toHaveLength(1);
    });
  });
});
