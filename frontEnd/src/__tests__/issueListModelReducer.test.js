import {
  reducer,
  IssueListInitialize,
  IssueCheckToggle,
  IssueCheckAll,
  IssueUnCheckAll,
  IssueToggleAction,
  IssueCheckAllAction,
  IssueUnCheckAllAction,
} from '~/*/models/issueListModel';
import * as _ from 'lodash';

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

describe('IssueListModelReducer Test', () => {
  let cloneDummy;
  beforeEach(() => {
    cloneDummy = _.cloneDeep(dummyData);
  });

  test('immutable?', () => {
    const hi = _.cloneDeep(dummyData);
    expect(hi === dummyData).toBeFalsy();
  });

  test('IssueListInitialize Test', () => {
    const out = reducer(
      {},
      {
        type: IssueListInitialize,
        data: cloneDummy,
      },
    );

    expect(out === cloneDummy).toBeTruthy();
  });

  test('IssueCheckToggle Test', () => {
    const out = reducer(cloneDummy, {
      type: IssueCheckToggle,
      id: 1,
    });

    expect(out[0].isCheckBoxChecked).toBeTruthy();
    expect(out[1].isCheckBoxChecked).toBeFalsy();
  });

  test('IssueCheckAll Test', () => {
    const out = reducer(cloneDummy, {
      type: IssueCheckAll,
    });
    expect(out[0].isCheckBoxChecked).toBeTruthy();
    expect(out[1].isCheckBoxChecked).toBeTruthy();
  });

  test('IssueUnCheckAll Test', () => {
    const out = reducer(cloneDummy, {
      type: IssueUnCheckAll,
    });
    expect(out[0].isCheckBoxCheckd).toBeFalsy();
    expect(out[1].isCheckBoxCheckd).toBeFalsy();
  });
  test('IssueToggleAction Test', () => {
    const result = IssueToggleAction();
    expect(result.type).toBe(IssueCheckToggle);
  });
  test('IssueCheckAllAction Test', () => {
    const result = IssueCheckAllAction();
    expect(result.type).toBe(IssueCheckAll);
  });
  test('IssueCheckAllAction Test', () => {
    const result = IssueUnCheckAllAction();
    expect(result.type).toBe(IssueUnCheckAll);
  });
});
