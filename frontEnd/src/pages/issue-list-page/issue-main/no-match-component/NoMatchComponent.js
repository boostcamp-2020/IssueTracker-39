import React from 'react';
import styled from 'styled-components';
import NoMatchSVG from '~/*/images/noMatchSVG';

const NoMatchComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;
`;

const NoMatchText = styled.p`
font-size:22px;
font-weight:bold;
`;
const NoMatchComponent = () => {
  return (
    <NoMatchComponentWrapper>
      <IconWrapper>
        <NoMatchSVG color={"#b6b6b6"}/>
      </IconWrapper>
      <NoMatchText>No results matched your search.</NoMatchText>
    </NoMatchComponentWrapper>
  );
};

export default NoMatchComponent;
