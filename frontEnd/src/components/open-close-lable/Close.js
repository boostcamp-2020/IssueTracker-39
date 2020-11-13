import React from 'react';
import styled from 'styled-components';
import ClosedIcon from '../../images/closed';

const Closedborder = styled.div`
  align-items: center;
  border: 1px solid #d73a49;
  background-color: #d73a49;
  border-radius: 5px;
  color: #fff;
  padding: 5px;
  margin: 5px;
  font-weight: bold;
`;

const ClosedImg = styled.span`
  filter: invert(99%) sepia(4%) saturate(1291%) hue-rotate(247deg)
    brightness(121%) contrast(100%);
`;

const Closed = () => {
  return (
    <>
      <Closedborder>
        <ClosedImg>
          <ClosedIcon></ClosedIcon>
        </ClosedImg>
        Closed
      </Closedborder>
    </>
  );
};

export default Closed;
