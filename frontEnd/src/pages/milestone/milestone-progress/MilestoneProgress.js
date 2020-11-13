import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ProgressBar from '~/*/components/progress-bar/ProgressBar';
const ProgressSVGColor = '#2CBE4E';
const ProgressWrapper = styled.div``;
const SVGWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;
const ProgressText = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const ProgressWord = styled.p`
  margin-right: 20px;
`;
const ProgressWordStrog = styled.span`
  font-weight: bold;
`;
const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Edit = styled(Link)`
  margin-right: 15px;
  text-decoration: none;
`;

const BoxButton = styled.a`
  margin-right: 15px;
  cursor: pointer;
  background-color: transparent;
  border: 0px;
`;

const MilestoneProgress = ({open, close, idx, opened, requests}) => {
  const {requestCloseMilestone, requestDeleteMilestone} = requests;
  const svgColor = opened ? ProgressSVGColor : 'RED';
  const percentage = useMemo(() => {
    if (open + close === 0) {
      return 0;
    }
    return Math.round((close / (open + close)) * 100);
  }, [open, close]);

  const onClickClose = () => {
    requestCloseMilestone(idx);
  };

  const onClickDelete = () => {
    requestDeleteMilestone(idx);
  };

  return (
    <ProgressWrapper>
      <SVGWrapper>
        <ProgressBar
          open={open}
          close={close}
          color={svgColor}
          opened={opened}
        />
      </SVGWrapper>
      <ProgressText>
        <ProgressWord>
          <ProgressWordStrog>{percentage}%</ProgressWordStrog> complete
        </ProgressWord>
        <ProgressWord>
          <ProgressWordStrog>{open}</ProgressWordStrog> open
        </ProgressWord>
        <ProgressWord>
          <ProgressWordStrog>{close}</ProgressWordStrog> closed
        </ProgressWord>
      </ProgressText>
      <ButtonList>
        <Edit to={`/milestone/update/${idx}`}>Edit</Edit>
        {opened ? <BoxButton onClick={onClickClose}>Close</BoxButton> : null}
        <BoxButton onClick={onClickDelete}>Delete</BoxButton>
      </ButtonList>
    </ProgressWrapper>
  );
};

export default MilestoneProgress;
