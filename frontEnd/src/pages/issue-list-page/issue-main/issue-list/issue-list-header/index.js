import React, {useEffect, useState, useRef} from 'react';
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

const IssueListHeader = () => {
  const [markAsVisibility, setMarkAsVisibility] = useState(false);
  const selectedCount = useRef();

  useEffect(() => {
    const value = selectedCount.current.getAttribute('value');
    setMarkAsVisibility(value > 0);
  });
  return (
    <IssueListHeaderLayout>
      <HeaderLeft>
        <ChecBoxWithDescription
          reference={selectedCount}
        ></ChecBoxWithDescription>
      </HeaderLeft>
      <HeaderRight>
        {markAsVisibility ? (
          <IssueHeaderFilterButton name={'Mark As'} isSidebar={false} />
        ) : (
          <>
            <IssueHeaderFilterButton name={'Author'} isSidebar={false} />
            <IssueHeaderFilterButton name={'Label'} isSidebar={false} />
            <IssueHeaderFilterButton name={'Milestone'} isSidebar={false} />
            <IssueHeaderFilterButton name={'Assignee'} isSidebar={false} />
          </>
        )}
      </HeaderRight>
    </IssueListHeaderLayout>
  );
};

export default IssueListHeader;
