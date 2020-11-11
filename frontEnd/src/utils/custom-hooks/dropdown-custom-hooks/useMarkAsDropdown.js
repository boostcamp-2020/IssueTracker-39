const markedAsContents = [{title: 'Open'}, {title: 'Closed'}];

const useMarkAsDropdown = ({onClick}) => {
  const runOnClick = (title) => {
    onClick();
    console.log(title);
    /**
     * @TODO
     * title = Open | Closed
     * 이거 가지고 open close 요청 보내면됨
     */
  };
  return {runOnClick, dropDownItems: markedAsContents};
};
export default useMarkAsDropdown;
