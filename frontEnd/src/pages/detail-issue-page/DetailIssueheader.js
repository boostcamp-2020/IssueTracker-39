import React from 'react';
import styled from 'styled-components';
import Open from '../../components/open-close-lable/Open';
import Closed from '../../components/open-close-lable/Close';

const TitleHeader = styled.div`
  display: flex;
  align-items: center;
`;

const Headding = styled.div`
  font-size: 24px;
`;

const HeaderDescription = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;
`;

const EditBtn = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid rgb(127, 129, 129);
  backgroud-color: #f3f4f6;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: auto;
  font-size: 12px;
  font-weight: bold;
`;

const DetailIssueHeader = () => {
  const Title = '이슈 상세 제목';
  const idx = 1;

  return (
    <>
      <TitleHeader>
        <Headding>
          {Title}
          {`#${idx}`}
        </Headding>

        <EditBtn onClick={null}>Edit</EditBtn>
      </TitleHeader>
      <HeaderDescription>
        <Open></Open>
        <Closed></Closed>
        <span>desc</span>
      </HeaderDescription>
      <hr></hr>
    </>
  );
};

export default DetailIssueHeader;
