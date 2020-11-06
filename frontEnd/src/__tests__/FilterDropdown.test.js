import React from 'react';
import Filter from '~/*/pages/issue-list-page/issue-main/issue-main-header/filter';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import {IssueListModelContext} from '../models/IssueListModel';
import {FilterModelContext} from '../models/FilterModel';
import userEvent from '@testing-library/user-event';
import axiosMaker from '../utils/axios/axiosMaker';

describe('Filter Dropdown Test', () => {
  let filterDispatch = jest.fn();
  let filterActions = {
    Author: jest.fn(),
    Label: jest.fn(),
    Milestone: jest.fn(),
    Assignee: jest.fn(),
    Is: jest.fn(),
  };

  let issueActions = {
    UpdateIssueListAction: jest.fn(),
  };
  let issueDispatch = jest.fn();

  beforeEach(async () => {
    jest.resetAllMocks();
    render(
      <IssueListModelContext.Provider
        value={{
          dispatch: issueDispatch,
          actions: issueActions,
          store: {},
        }}
      >
        <FilterModelContext.Provider
          value={{
            dispatch: filterDispatch,
            actions: filterActions,
            store: {},
          }}
        >
          <Filter></Filter>
        </FilterModelContext.Provider>
      </IssueListModelContext.Provider>,
    );
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
  test('Author:zz Label:pp 를 입력했을 경우 필터 컴포넌트에 전달이 되는가?', async () => {
    const inputs = screen.getByPlaceholderText(/Search All Issues/g);
    userEvent.type(
      screen.getByPlaceholderText(/Search All Issues/g),
      'Author:zz Label:pp 너를 고장내주겠 {enter}',
    );
    expect(filterActions.Author).toHaveBeenCalledTimes(1);
    expect(filterActions.Label).toHaveBeenCalledTimes(1);
    expect(filterActions.Author.mock.calls[0][0]).toBe('zz');
    expect(filterActions.Label.mock.calls[0][0]).toBe('pp');
    await waitFor(() => expect(issueDispatch).toHaveBeenCalledTimes(1));
  });
});
