import React from 'react';
import styled from 'styled-components';
import ChecBoxWithDescription from '~/*/components/checkbox-with-description';
import IssueHeaderFilterButton from '~/*/components/issue-header-filter-button';

const IssueListHeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f6f8fa;
  padding: 20px 10px;
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
        {issueListDummyList.map((name, id) => (
          <IssueHeaderFilterButton name={name} key={name} show={id === 2} />
        ))}
      </HeaderRight>
    </IssueListHeaderLayout>
  );
};

export default IssueListHeader;
