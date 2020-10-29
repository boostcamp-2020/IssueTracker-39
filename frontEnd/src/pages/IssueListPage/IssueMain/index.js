import React from 'react';

import Filter from './Filter';
import Buttonlist from './ButtonList';
import IssueList from './IssueList';
// 이곳에 ContextAPI 나중에 추가할것!

const IssueMain = () => {
  return (
    <>
      <Filter></Filter>
      <Buttonlist></Buttonlist>
      <IssueList></IssueList>
    </>
  );
};

export default IssueMain;
