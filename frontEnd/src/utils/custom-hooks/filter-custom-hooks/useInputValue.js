import {useState, useContext} from 'react';
import {modelStore} from '~/*/models/store';
import axiosMaker from '~/*/utils/axios/axiosMaker';

const synchronizeModel = (filterStr = '', actions, dispatch) => {
  const filterRegs = {
    Is: /(Is:open)|(Is:closed)/g,
    Author: /(Author:[\w_\-@.]+)/g,
    Label: /(Label:([\w_\-@.]+|"[\w_\-@. ]+"))/g,
    Milestone: /(Milestone:([\w_\-@.]+|"[\w_\-@. ]+"))/g,
    Assignee: /(Assignee:[\w_\-@.]+)/g,
  };

  const parsedFilter = {};
  Object.keys(filterRegs).forEach((reg) => {
    const regResult = filterStr.match(filterRegs[reg]);
    if (!regResult) {
      dispatch(actions[reg](undefined));
      return;
    }
    const regSplitted = regResult[0].split(':');
    if (!regSplitted) return;
    dispatch(actions[reg](regSplitted[1]));
    parsedFilter[reg] = regSplitted[1];
  });
  return parsedFilter;
};

const useInputValue = ({
  initialState,
  dropdownVisibility,
  dropdownRef,
  hideDropdown,
  filterList,
}) => {
  const [inputValue, setInputValue] = useState(initialState);
  const {store, actions, dispatch} = useContext(modelStore.Filter);
  const {
    store: issueStore,
    actions: issueActions,
    dispatch: issueDispatch,
  } = useContext(modelStore.IssueList);

  const dropdownClickHandler = ({target}) => {
    if (!dropdownVisibility) return;
    const result = [...dropdownRef.current.children].filter(
      (children) => children === target,
    );
    if (result.length === 0) {
      hideDropdown();
      return;
    }
    const filterValue = filterList[target.value];
    setInputValue(filterValue);
    hideDropdown();
    return filterValue;
  };
  const clearInputValue = () => {
    setInputValue(initialState);
    sendRequest('Is:open');
  };

  const sendRequest = (filterStr = '') => {
    const parsedFilter = synchronizeModel(filterStr, actions, dispatch);
    axiosMaker()
      .post('/api/issue/list', parsedFilter)
      .then(({data}) => {
        issueDispatch(issueActions.UpdateIssueListAction(data));
      });
  };
  const sendRequestEvent = (e) => {
    if (e.key != 'Enter') return;
    const filterStr = e.target.value;
    sendRequest(filterStr);
  };

  return {
    inputValue,
    setInputValue,
    dropdownClickHandler,
    clearInputValue,
    sendRequest,
    sendRequestEvent,
  };
};
export default useInputValue;
