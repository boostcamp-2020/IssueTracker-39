import React from 'react';
import MilestoneForm from '~/*/components/milestone-form/MilestoneForm';
import formHooks from '~/*/components/milestone-form/formHooks';
import Header from '~/*/components/header/Header';
import styled from 'styled-components';
import CommonButton from '~/*/components/common-button/CommonButton';
import NavigationList from '~/*/components/navigation-list/NavigationList';

const mileStoneWidth = '90%';
const Body = styled.main`
  box-sizing: border-box;
  width: ${mileStoneWidth};
  margin: 5% auto;
`;
const BodyHeader = styled.div`
  h1 {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  padding: 0px 0px 20px 0px;
`;
const BlueWord = styled.span`
  color: blue;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px 0px;
  button{
    margin-left:15px;
  };
`;

const shallowGreenColor = 'rgb(46, 164, 79)';
const whiteColor = '#ECEEF0';
const textColor = 'white';
const EditMilestonePage = () => {
  const {store, changes} = formHooks();
  return (
    <div>
      <Header />
      <Body>
        <BodyHeader>
          <NavigationList />
        </BodyHeader>
        <MilestoneForm states={store} changes={changes} />
        <ButtonList>
          <CommonButton color={whiteColor}>Cancel</CommonButton>
          <CommonButton color={whiteColor}>Close milestone</CommonButton>
          <CommonButton color={shallowGreenColor} textColor={textColor}>
            Create Milestone
          </CommonButton>
        </ButtonList>
      </Body>
    </div>
  );
};

export default EditMilestonePage;
