import React from 'react';

import Filter from './Filter';
import Buttonlist from './ButtonList';
import styled from 'styled-components';

const IssueMainHeaderLayout = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IssueMainHeader = () => {
  return (
    <IssueMainHeaderLayout>
      <Filter></Filter>
      <Buttonlist></Buttonlist>
    </IssueMainHeaderLayout>
  );
};

export default IssueMainHeader;
