import React, {useState} from 'react';
import styled from 'styled-components';

import openIcon from '../../images/open.svg';
import milestoneIcon from '../../images/milestone.svg';
import Label from '../label/Label';

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
  .icon__open {
    height: ${iconHeight};
    filter: invert(59%) sepia(50%) saturate(4234%) hue-rotate(93deg)
      brightness(93%) contrast(85%);
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
  .icon__milestone {
    opacity: 0.3;
    margin-right: 2px;
  }
`;

const Issue = ({
  title,
  labelTitle,
  labelColor,
  createdTime,
  closedTime,
  status,
  author,
  milestoneIdx,
}) => {
  const [checked, setChecked] = useState(false);
  const label = {labelTitle, labelColor};

  return (
    <IssueStyle>
      <input
        className="issue__checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <IssueContentWrapper>
        <ContentTopWrapper>
          <img className="icon__open" src={openIcon}></img>
          <a className="issue__title">{title}</a>
          <Label {...label} />
        </ContentTopWrapper>
        <ContentBottomWrapper>
          <span className="text__time__author">
            opened at {createdTime} by {author}
          </span>
          <MilestoneWrapper>
            <img className="icon__milestone" src={milestoneIcon}></img>
            <span className="milestone__title">{milestoneIdx}</span>
          </MilestoneWrapper>
        </ContentBottomWrapper>
      </IssueContentWrapper>
    </IssueStyle>
  );
};

export default Issue;
