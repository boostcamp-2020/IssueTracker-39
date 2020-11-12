import {useContext} from 'react';
import {modelStore, Filter} from '~/*/models/store';

const useDropDownPresenter = ({dropDownName, onClick}) => {
  const {store, getDropDownItem} = useContext(modelStore[dropDownName]);
  const {
    store: filterStore,
    actions: filterActions,
    dispatch: filterDispatch,
  } = useContext(modelStore.Filter);

  const runOnClick = (title) => {
    onClick();
    filterDispatch(
      filterActions[dropDownName](title.includes(' ') ? `"${title}"` : title),
    );
  };
  const dropDownItems =
    dropDownName === 'Author'
      ? getDropDownItem(store)
      : [{title: 'no'}].concat(getDropDownItem(store));
  const inputTitle = filterStore[dropDownName];
  return {runOnClick, dropDownItems, inputTitle};
};
export default useDropDownPresenter;
