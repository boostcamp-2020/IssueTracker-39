import React, {useContext} from 'react';
import CheckBoxWithPresenter from './CheckBoxWithPresenter';
import {IssueListModelContext} from '~/*/models/IssueListModel';

const CheckBoxWithContainer = () => {
  const {count, setCount, store, checkedIssues, setCheckedIssues} = useContext(
    IssueListModelContext,
  );

  const checkedIssueAllHandler = () => {
    if (document.querySelector('.checkbox__all').checked) {
      store.forEach((issue) => {
        if (checkedIssues.has(issue.idx)) return;
        else {
          checkedIssues.add(issue.idx);
          setCheckedIssues(checkedIssues);
          setCount(checkedIssues.size);
        }
      });
    } else {
      store.forEach((issue) => {
        if (!checkedIssues.has(issue.idx)) return;
        else {
          checkedIssues.delete(issue.idx);
          setCheckedIssues(checkedIssues);
          setCount(checkedIssues.size);
        }
      });
    }
  };

  return (
    <CheckBoxWithPresenter
      checkBoxClick={checkedIssueAllHandler}
      selectedCount={count}
    />
  );
};

export default CheckBoxWithContainer;
