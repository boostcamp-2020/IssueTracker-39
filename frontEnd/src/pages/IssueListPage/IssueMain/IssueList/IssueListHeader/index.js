import React from 'react';
import styled from 'styled-components';
import ChecBoxWithDescription from '../../../../../components/CheckBoxWithDescription';
import IssueHeaderFilterButton from '../../../../../components/IssueHeaderFilterButton';

const IssueListHeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const HeaderLeft = styled.div``;
const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

const issueListDummyList = ['Author', 'Label', 'Milestones', 'Assginee'];
const IssueListHeader = () => {
  return (
    <IssueListHeaderLayout>
      <HeaderLeft>
        <ChecBoxWithDescription></ChecBoxWithDescription>
      </HeaderLeft>
      <HeaderRight>
        {issueListDummyList.map((name) => (
          <IssueHeaderFilterButton name={name} key={name} />
        ))}
      </HeaderRight>
    </IssueListHeaderLayout>
  );
};

export default IssueListHeader;
