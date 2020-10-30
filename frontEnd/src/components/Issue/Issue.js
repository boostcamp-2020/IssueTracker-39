import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {IssueListModelContext} from '~/*/models/issueListModel';

import openIcon from '../../images/book-24px.svg';
import Label from '../../components/Label/Label';

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
  flex-direction: column;
  .wrapper__issue__top,
  .wrapper__issue__bottom {
    display: flex;
  }
  .wrapper__issue__top {
  }
  .wrapper__issue__bottom {
    color: gray;
    font-size: 0.7rem;
    padding-left: 0.3rem;
    margin-top: 8px;
  }
  .icon__open {
    height: ${iconHeight};
  }
  .text__time__author {
    margin-right: 5px;
  }
  .issue__title {
    font-size: 17px;
    margin: 0px 8px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
      <div className="wrapper__issue__top">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          style={{
            marginRight: '20px',
          }}
        />
        <div>
          <TitleWrapper>
            <img className="icon__open" src={openIcon}></img>
            <div className="issue__title">{title}</div>
            <Label {...label} />
          </TitleWrapper>
          <div className="wrapper__issue__bottom">
            <div className="text__time__author">
              opened at {createdTime} by {author}
            </div>
            <div>{milestoneIdx}</div>
          </div>
        </div>
      </div>
    </IssueStyle>
  );
};

export default Issue;
