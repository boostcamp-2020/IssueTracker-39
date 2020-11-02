import React from 'react';

import Filter from '~/*/pages/issue-list-page/issue-main/issue-main-header/filter';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';

describe('Filter Dropdown Test', () => {
  beforeEach(async () => {
    render(<Filter></Filter>);
    await waitFor(() => screen.getByText(/Filters/g));
  });
  test('Filter Dropdown Btn Click - Open', async () => {
    fireEvent.click(screen.getByText(/Filters/g));
    await waitFor(() => screen.getByText('Open Issues'));
  });
  test('Filter Dropdown Btn Click - Close', async () => {
    fireEvent.click(screen.getByText(/Filters/g));
    fireEvent.click(screen.getByText(/Filters/g));
    expect(screen.queryByText('Open Issues')).toBeNull();
  });
  test('Filter Dropdown Btn Click - Close with Click outside', async () => {
    fireEvent.click(screen.getByText(/Filters/g));
    fireEvent.click(document);
    expect(screen.getByText('Open Issues'));
  });
});
