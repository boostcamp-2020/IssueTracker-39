import {useContext} from 'react';
import {IssueListModelContext} from '~/*/models/IssueListModel';
import axiosMaker from '~/*/utils/axios/axiosMaker';

const getIssueListToUpdate = (store) => {
  return store
    .filter(({isCheckBoxChecked}) => isCheckBoxChecked === true)
    .map(({idx}) => idx);
};

const markAsContents = [{title: 'Open'}, {title: 'Closed'}];

const useMarkAsDropdown = ({onClick}) => {
  const {store, actions, dispatch} = useContext(IssueListModelContext);
  const runOnClick = async (title) => {
    onClick();
    const issueListIdxToUpdate = getIssueListToUpdate(store);
    const url = `api/issue/${title.toLocaleLowerCase()}`;
    const {data} = await axiosMaker().put(url, issueListIdxToUpdate);
    if (!data) return;
    dispatch(actions.UpdateIssueListStatusAction(issueListIdxToUpdate, title));
    dispatch(actions.IssueUnCheckAllAction());
  };
  return {runOnClick, dropDownItems: markAsContents};
};
export default useMarkAsDropdown;
