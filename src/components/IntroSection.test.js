import { render, screen } from '@testing-library/react';
import IntroSection from './IntroSection';

test('renders the element correctly', () => {
  render(<IntroSection />);
  const wrapper = screen.getByTestId('intro');
  expect(wrapper).toMatchSnapshot();
});
