import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import HeaderFilterDropdown from '../components/issue-header-filter-button';
import {IssueList, modelStore} from '../models/store';
import {AuthorModelContext} from '../models/AuthorModel';
import {FilterModelContext} from '../models/FilterModel';
import {IssueListModelContext} from '..//models/IssueListModel';
import {sampleData as authorData} from '../test-data/getAuthorList';

describe('필터 버튼 리스트 테스트', () => {
  describe('dropDown 모션 테스트', () => {
    function FakeComponent() {
      return <div>ImFake</div>;
    }
    let filterDispatch = jest.fn();
    let filterAction = jest.fn();

    beforeEach(() => {
      jest.resetAllMocks();
      render(
        <IssueListModelContext.Provider
          value={{
            store: authorData,
            actions: {},
            dispatch: {},
          }}
        >
          <AuthorModelContext.Provider
            value={{
              store: [
                {
                  title: 'test',
                },
                {
                  title: 'test2',
                },
                {
                  title: 'test3',
                },
              ],
              getDropDownItem: (data) => {
                return data;
              },
            }}
          >
            <FilterModelContext.Provider
              value={{
                store: {
                  Author: 'Hi',
                },
                actions: {
                  Author: filterAction,
                },
                dispatch: filterDispatch,
              }}
            >
              <HeaderFilterDropdown name={'Author'} onClick={jest.fn()} />
              <FakeComponent />
            </FilterModelContext.Provider>
          </AuthorModelContext.Provider>
        </IssueListModelContext.Provider>,
      );
    });
    test('클릭시 dropDown이 나와야한다.', () => {
      fireEvent.click(screen.getByText('Author'));
      waitFor(() => {
        screen.getByText('드랍다운 헤더');
      });
    });
    test('다른 곳이 눌려졌을 경우 dropDown이 사라져야 한다.', () => {
      fireEvent.click(screen.getByText('Author'));
      waitFor(() => {
        screen.getByText('드랍다운 헤더');
      });
      fireEvent.click(screen.getByText('ImFake'));
      expect(screen.queryByText('드랍다운 헤더')).toBeNull();
    });
    test('드랍 다운 내용을 누르면 Filter의 dispatch가 호출되어야 한다.', () => {
      fireEvent.click(screen.getByText('Author'));
      waitFor(() => {
        screen.getByText('test');
      });
      fireEvent.click(screen.getByText('test'));
      expect(filterAction.mock.calls.length).toBe(1);
      expect(filterAction.mock.calls[0][0]).toBe('test');
      expect(filterDispatch.mock.calls.length).toBe(1);
    });
  });
});
