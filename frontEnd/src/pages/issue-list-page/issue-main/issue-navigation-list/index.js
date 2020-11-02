import React from 'react';
import styled from 'styled-components';

const IssueNavigationLayout = styled.nav`
  display: flex;
`;

const IssueNavigationList = () => {
  return <IssueNavigationLayout>이슈리스트 입니다</IssueNavigationLayout>;
};

export default IssueNavigationList;
