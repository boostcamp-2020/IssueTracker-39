import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';

import OpenIcon from '../../images/open.js';
import MilestoneIcon from '../../images/milestone';
import Label from '../label/Label';
import {calcBeforeTime} from '~/*/utils/timeManager.js';
import {IssueListModelContext} from '~/*/models/IssueListModel';

const iconHeight = '1rem';
const contentFontSize = '1rem';

const IssueStyle = styled.div`
  box-sizing: border-box;
  font-size: ${contentFontSize};
  background-color: #ffffff;
  color: black;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  border-top: 1px solid lightgray;
  display: flex;
  .issue__checkbox {
    margin-right: 20px;
  }
`;

const IssueContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const ContentTopWrapper = styled.div`
  > * {
    vertical-align: middle;
  }
  #icon__open {
    height: ${iconHeight};
    fill: #47c16a;
    vertical-align: middle;
  }
  .issue__title {
    box-sizing: border-box;
    font-size: 17px;
    margin: 0 8px;
  }
`;

const ContentBottomWrapper = styled.div`
  color: gray;
  font-size: 0.7rem;
  margin-top: 8px;
  .text__time__author {
    margin-right: 5px;
    vertical-align: middle;
  }
`;

const MilestoneWrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  > * {
    vertical-align: middle;
  }
  #icon__milestone {
    margin-right: 2px;
    path {
      opacity: 0.3;
    }
  }
`;

const Issue = ({
  idx,
  title,
  labels,
  createdTime,
  closedTime,
  authorUser,
  status,
  author,
  milestone,
  isCheckBoxChecked,
}) => {
  const {store, dispatch, actions} = useContext(IssueListModelContext);
  return (
    <IssueStyle>
      <input
        className="issue__checkbox"
        type="checkbox"
        checked={isCheckBoxChecked}
        onChange={() => dispatch(actions.IssueToggleAction(idx))}
      />
      <IssueContentWrapper>
        <ContentTopWrapper>
          <OpenIcon />
          <a className="issue__title">{title}</a>
          {labels.map((label, i) => {
            return <Label key={i} {...label} />;
          })}
        </ContentTopWrapper>
        <ContentBottomWrapper>
          <span className="text__time__author">
            opened {calcBeforeTime(createdTime)} by {authorUser.userId}
          </span>
          {milestone ? (
            <MilestoneWrapper>
              <MilestoneIcon />
              <span className="milestone__title">{milestone.title}</span>
            </MilestoneWrapper>
          ) : null}
        </ContentBottomWrapper>
      </IssueContentWrapper>
    </IssueStyle>
  );
};

export default Issue;
