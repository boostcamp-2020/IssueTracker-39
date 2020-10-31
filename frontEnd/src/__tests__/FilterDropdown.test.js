import React from 'react';

import Filter from '~/*/pages/issueListPage/IssueMain/IssueMainHeader/Filter';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';

describe('Filter Dropdown Test', () => {
  test('Initialize', async () => {
    render(<Filter></Filter>);
    await waitFor(() => screen.getByText(/Filters/g));
  });
  test('Filter Dropdown Btn Click', async () => {
    render(<Filter></Filter>);
    await waitFor(() => screen.getByText(/Filters/g));
    fireEvent.click(screen.getByText(/Filters/g));
    await waitFor(() => {
      screen.getByText('Open Issues');
    });
  });
});
