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
  background-color: #f7f8fa;
  color: black;
  margin: 0 auto;
  padding: 0.5rem 0;
  padding-top: 1rem;
  width: 100%;
  border-bottom: 1px solid gray;

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
  }
  .icon__open {
    height: ${iconHeight};
  }
  .text__time__author,
  .issue__title {
    margin-right: 5px;
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
      <div className="wrapper__issue__top">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <img className="icon__open" src={openIcon}></img>
        <div className="issue__title">{title}</div>
        <Label {...label} />
      </div>
      <div className="wrapper__issue__bottom">
        <div className="text__time__author">
          opened at {createdTime} by {author}
        </div>
        <div>{milestoneIdx}</div>
      </div>
    </IssueStyle>
  );
};

export default Issue;
