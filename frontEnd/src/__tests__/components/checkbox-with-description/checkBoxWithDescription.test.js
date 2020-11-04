import React from 'react';
import {IssueListModelContext} from '~/*/models/IssueListModel';
import CheckBoxWithDescription from '~/*/components/checkbox-with-description';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
describe('CheckBox 컴포넌트 테스트', () => {
  test('전체 영역이 눌린 상태에서는 값이 Checked 이어야한다.', () => {
    render(
      <IssueListModelContext.Provider
        value={{
          store: [
            {
              isCheckBoxChecked: true,
            },

            {
              isCheckBoxChecked: true,
            },

            {
              isCheckBoxChecked: true,
            },
          ],
        }}
      >
        <CheckBoxWithDescription />
      </IssueListModelContext.Provider>,
    );
    const input = document.querySelector('input[type=checkbox]');
    expect(input.checked).toBe(true);
  });
  test('전체 영역이 눌리지 않았다면 값이 unChecked이어야 한다.', () => {
    render(
      <IssueListModelContext.Provider
        value={{
          store: [
            {
              isCheckBoxChecked: true,
            },

            {
              isCheckBoxChecked: true,
            },

            {
              isCheckBoxChecked: false,
            },
          ],
        }}
      >
        <CheckBoxWithDescription />
      </IssueListModelContext.Provider>,
    );
    const input = document.querySelector('input[type=checkbox]');
    expect(input.checked).toBe(false);
  });
  describe('기능 연동 테스트', () => {
    test('아무것도 눌리지 않은 상태에서 누르면 IssueCheckAllAction이 호출된다.', () => {
      const IssueCheckAllAction = jest.fn();
      const IssueUnCheckAllAction = jest.fn();
      const dispatch = jest.fn();
      render(
        <IssueListModelContext.Provider
          value={{
            store: [
              {
                isCheckBoxChecked: false,
              },

              {
                isCheckBoxChecked: false,
              },

              {
                isCheckBoxChecked: false,
              },
            ],
            actions: {
              IssueCheckAllAction,
              IssueUnCheckAllAction,
            },
            dispatch,
          }}
        >
          <CheckBoxWithDescription />
        </IssueListModelContext.Provider>,
      );
      const input = document.querySelector('input[type=checkbox]');
      fireEvent.click(input);
      expect(IssueCheckAllAction.mock.calls.length).toBe(1);
    });
    test('모든것이 눌린 상태에서 누르면 IssueUnCheckAllAction이 호출된다.', () => {
      const IssueCheckAllAction = jest.fn();
      const IssueUnCheckAllAction = jest.fn();
      const dispatch = jest.fn();
      render(
        <IssueListModelContext.Provider
          value={{
            store: [
              {
                isCheckBoxChecked: true,
              },

              {
                isCheckBoxChecked: true,
              },

              {
                isCheckBoxChecked: true,
              },
            ],
            actions: {
              IssueCheckAllAction,
              IssueUnCheckAllAction,
            },
            dispatch,
          }}
        >
          <CheckBoxWithDescription />
        </IssueListModelContext.Provider>,
      );
      const input = document.querySelector('input[type=checkbox]');
      fireEvent.click(input);
      expect(IssueUnCheckAllAction.mock.calls.length).toBe(1);
    });
  });
});
