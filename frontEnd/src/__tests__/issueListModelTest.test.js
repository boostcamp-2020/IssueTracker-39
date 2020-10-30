import React, {createContext, useContext} from 'react';
import {
  IssueListInitialize,
  IssueCheckToggle,
  IssueCheckAll,
  IssueUnCheckAll,
  IssueListModelContext,
} from '~/*/models/issueListModel';
import IssueListModelConsumer from '~/*/models/issueListModel';
import * as _ from 'lodash';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';

const dummyData = [
  {
    idx: 1,
    author: 'Camper1',
    title: 'title1',
    createdTime: '2020-10-27T09:52:39.000Z',
    closedTime: null,
    status: true,
    milestoneIdx: 'frontEnd',
    labelTitle: 'FE',
    labelColor: 'red',
    isCheckBoxChecked: false,
  },
  {
    idx: 2,
    author: 'Camper1',
    title: 'title2',
    createdTime: '2020-10-27T09:52:39.000Z',
    closedTime: null,
    status: true,
    milestoneIdx: 'frontEnd',
    labelTitle: 'FE',
    labelColor: 'red',
    isCheckBoxChecked: false,
  },
];

describe('Model Test', () => {
  test('initialize', async () => {
    const InitTest = () => {
      const {store, actions} = useContext(IssueListModelContext);
      return <>{store.length}</>;
    };

    render(
      <IssueListModelConsumer>
        <InitTest />
      </IssueListModelConsumer>,
    );
    await waitFor(() => screen.getByText('8'));
  });
  test('toggleTest', async () => {
    const InitTest = () => {
      const {store, actions} = useContext(IssueListModelContext);
      return (
        <>
          <div
            onClick={() => {
              actions.IssueToggle(1);
            }}
          >
            clickMe
          </div>
          <div>
            {store.reduce((acc, curr) => {
              if (curr.isCheckBoxChecked) {
                return acc + 1;
              }
              return acc;
            }, 0)}
          </div>
        </>
      );
    };

    render(
      <IssueListModelConsumer>
        <InitTest />
      </IssueListModelConsumer>,
    );
    await waitFor(() => screen.getByText('0'));

    fireEvent.click(screen.getByText('clickMe'));
    await waitFor(() => screen.getByText('1'));
  });
  test('checkAllTest', async () => {
    const InitTest = () => {
      const {store, actions} = useContext(IssueListModelContext);
      return (
        <>
          <div
            onClick={() => {
              actions.IssueCheckAll();
            }}
          >
            clickMe
          </div>
          <div>
            {store.reduce((acc, curr) => {
              if (curr.isCheckBoxChecked) {
                return acc + 1;
              }
              return acc;
            }, 0)}
          </div>
        </>
      );
    };

    render(
      <IssueListModelConsumer>
        <InitTest />
      </IssueListModelConsumer>,
    );
    await waitFor(() => screen.getByText('0'));

    fireEvent.click(screen.getByText('clickMe'));
    await waitFor(() => screen.getByText('8'));
  });
  test('unCheckTest', async () => {
    const InitTest = () => {
      const {store, actions} = useContext(IssueListModelContext);
      return (
        <>
          <div
            onClick={() => {
              actions.IssueUnCheckAll();
            }}
          >
            clickMe
          </div>
          <div>
            {store.reduce((acc, curr) => {
              if (curr.isCheckBoxChecked) {
                return acc + 1;
              }
              return acc;
            }, 0)}
          </div>
        </>
      );
    };

    render(
      <IssueListModelConsumer>
        <InitTest />
      </IssueListModelConsumer>,
    );
    await waitFor(() => screen.getByText('0'));
    fireEvent.click(screen.getByText('clickMe'));
    await waitFor(() => screen.getByText('0'));
  });
});
