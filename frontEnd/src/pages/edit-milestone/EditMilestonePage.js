import React, {useEffect, useContext, useMemo} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {MilestoneModelContext} from '~/*/models/MilestoneModel';
import MilestoneForm from '~/*/components/milestone-form/MilestoneForm';
import formHooks from '~/*/components/milestone-form/formHooks';
import Header from '~/*/components/header/Header';
import styled from 'styled-components';
import CommonButton from '~/*/components/common-button/CommonButton';
import NavigationList from '~/*/components/navigation-list/NavigationList';
import {paramValidation} from '~/*/utils/validations';
import MilestoneFormVO from '~/*/vo/milestoneFormVO';

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
  button {
    margin-left: 15px;
  }
`;

const shallowGreenColor = 'rgb(46, 164, 79)';
const whiteColor = '#ECEEF0';
const textColor = 'white';

function getMilestoneInfo(store, id) {
  if (store.length === 0) {
    return undefined;
  }

  const milestone = store.find((milestone) => milestone.idx === id);
  return milestone;
}

const EditMilestonePage = () => {
  const id = paramValidation();
  const {store: milestoneStore, requests} = useContext(MilestoneModelContext);
  const {requestCloseMilestone, requestUpdateMilestone} = requests;
  const {store, changes, valueChange, dispatch} = formHooks();
  const history = useHistory();

  useEffect(() => {
    const milestone = getMilestoneInfo(milestoneStore, id);
    if (milestone !== undefined) {
      const {title, description, dueDate} = milestone;
      const newFormVO = new MilestoneFormVO(title, description, dueDate);
      dispatch(valueChange(newFormVO));
    }
  }, [milestoneStore, id]);

  const clickCloseButton = async () => {
    await requestCloseMilestone(id);
    history.push('/milestone');
  };

  const clickUpdateButton = async () => {
    const {title, date, description} = store;
    await requestUpdateMilestone(id, title, date, description);
    history.push('/milestone');
  };

  return (
    <div>
      <Header />
      <Body>
        <BodyHeader>
          <NavigationList />
        </BodyHeader>
        <MilestoneForm states={store} changes={changes} />
        <ButtonList>
          <Link to="/milestone">
            <CommonButton color={whiteColor}>Cancel</CommonButton>
          </Link>
          <CommonButton color={whiteColor} onClick={clickCloseButton}>
            Close milestone
          </CommonButton>
          <CommonButton
            color={shallowGreenColor}
            textColor={textColor}
            onClick={clickUpdateButton}
          >
            Create Milestone
          </CommonButton>
        </ButtonList>
      </Body>
    </div>
  );
};

export default EditMilestonePage;
