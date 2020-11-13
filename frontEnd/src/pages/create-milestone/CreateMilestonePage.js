import React, {useContext} from 'react';
import MilestoneForm from '~/*/components/milestone-form/MilestoneForm';
import formHooks from '~/*/components/milestone-form/formHooks';
import Header from '~/*/components/header/Header';
import styled from 'styled-components';
import CommonButton from '~/*/components/common-button/CommonButton';
import {MilestoneModelContext} from '~/*/models/MilestoneModel';
import {useHistory} from 'react-router-dom';

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
`;

const shallowGreenColor = 'rgb(46, 164, 79)';
const textColor = 'white';
const CreateMilestonePage = () => {
  const {requests} = useContext(MilestoneModelContext);
  const {requestCreateMilestone} = requests;
  const history = useHistory();
  const {store, changes} = formHooks();

  const clickCreateButton = async () => {
    await requestCreateMilestone(store.title, store.date, store.description);
    history.push('/milestone');
  };
  return (
    <div>
      <Header />
      <Body>
        <BodyHeader>
          <h1>New milestone</h1>
          <p>
            create a new milestone to help organize your issues and pull
            requests. Learn more about
            <BlueWord> milestones and issues.</BlueWord>
          </p>
        </BodyHeader>
        <MilestoneForm states={store} changes={changes} />
        <ButtonList>
          <CommonButton
            onClick={clickCreateButton}
            color={shallowGreenColor}
            textColor={textColor}
          >
            Create Milestone
          </CommonButton>
        </ButtonList>
      </Body>
    </div>
  );
};

export default CreateMilestonePage;
