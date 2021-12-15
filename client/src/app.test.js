import { Provider } from 'react-redux';
import { render, screen } from './utils/test.utils';

import App from './App';

test('renders learn react link', () => {
  render(
    <App />
  );
  expect(screen.queryAllByRole('link')).toHaveLength(8);
});
