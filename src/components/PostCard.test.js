import { render, screen } from '@testing-library/react';
import PostCard from './PostCard';

test('renders the title and content correctly', () => {
  const title = 'test title';
  const content = '<div>test content</div>';
  render(<PostCard title={title} content={content} />);

  const titleElement = screen.getByTestId('title');
  const contentElement = screen.getByTestId('content');
  expect(titleElement.innerHTML).toBe(title);
  expect(contentElement.innerHTML).toBe(content);
});
