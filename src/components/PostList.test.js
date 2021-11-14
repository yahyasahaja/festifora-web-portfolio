import { render, screen } from '@testing-library/react';
import flushPromises from 'flush-promises';
import getPostsMock from '../mocks/get-posts.json';
import PostList from './PostList';
import api from '../api';

test('renders the title and content correctly', async () => {
  const mock = jest.spyOn(api, 'getPosts');
  mock.mockImplementation(() => Promise.resolve(getPostsMock));
  render(<PostList />);

  await flushPromises();

  const wrapper = screen.getByTestId('post-list');
  expect(wrapper).toMatchSnapshot();
});
