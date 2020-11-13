import React, {useState} from 'react';
import styled from 'styled-components';
import Header from '~/*/components/header/Header';
import Footer from '~/*/components/footer/Footer';
import NavigationList from '~/*/components/navigation-list/NavigationList';
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
  margin-bottom: 10px;
`;

const LabelPage = () => {
  const [inputFormVisibility, setInputFormVisibility] = useState(false);
  const showLabelForm = () => {
    setInputFormVisibility(true);
  };
  const hideLabelForm = () => {
    setInputFormVisibility(false);
  };
  return (
    <>
      <Header />
      <LabelPageLayout>
        <LabelHeaderLayout>
          <NavigationList />
          <CreateLabel showLabelForm={showLabelForm} />
        </LabelHeaderLayout>
        {inputFormVisibility ? <LabelForm hideLabelForm={hideLabelForm} /> : ''}
        <LabelList></LabelList>
      </LabelPageLayout>
      <Footer />
    </>
  );
};

export default LabelPage;
