import React from 'react';
import styled from 'styled-components';
import Header from '~/*/components/header/Header';
import NavigationList from './NavigationList';
import CreateLabel from './CreateLabel.js';
import LabelForm from './LabelForm';
import LabelList from './LabelList';

const LabelPageLayout = styled.div`
  box-sizing: border-box;
  width: 90%;
  margin: 5% auto;
`;
const LabelHeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LabelPage = () => {
  return (
    <>
      <Header />
      <LabelPageLayout>
        <LabelHeaderLayout>
          <NavigationList />
          <CreateLabel />
        </LabelHeaderLayout>
        <LabelForm />
        <LabelList></LabelList>
      </LabelPageLayout>
    </>
  );
};

export default LabelPage;