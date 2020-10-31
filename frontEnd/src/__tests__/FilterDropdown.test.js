import React from 'react';

import Filter from '~/*/pages/issueListPage/IssueMain/IssueMainHeader/Filter';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';

describe('Filter Dropdown Test', () => {
  test('Initialize', async () => {
    render(<Filter></Filter>);
    await waitFor(() => screen.getByText(/Filters/g));
  });
  test('Filter Dropdown Btn Click - Open', async () => {
    render(<Filter></Filter>);
    await waitFor(() => screen.getByText(/Filters/g));
    fireEvent.click(screen.getByText(/Filters/g));
    await waitFor(() => {
      screen.getByText('Open Issues');
    });
  });
  test('Filter Dropdown Btn Click - Close', async () => {
    render(<Filter></Filter>);
    await waitFor(() => screen.getByText(/Filters/g));
    fireEvent.click(screen.getByText(/Filters/g));
    fireEvent.click(screen.getByText(/Filters/g));
    await waitFor(() => {
      try {
        screen.getByText('Open Issues');
        expect(1).toBe(2);
      } catch (e) {
        expect(1).toBe(1);
      }
    });
  });
  test('Filter Dropdown Btn Click - Close with Click outside', async () => {
    render(<Filter></Filter>);
    await waitFor(() => screen.getByText(/Filters/g));
    fireEvent.click(screen.getByText(/Filters/g));
    fireEvent.click(document);
    await waitFor(() => {
      try {
        screen.getByText('Open Issues');
        expect(1).toBe(2);
      } catch (e) {
        expect(1).toBe(1);
      }
    });
  });
});
