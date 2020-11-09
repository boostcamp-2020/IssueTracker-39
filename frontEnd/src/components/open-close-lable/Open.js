import React from 'react';
import styled from 'styled-components';
import OpenIcon from '../../images/open';

const Openborder = styled.div`
  align-items: center;
  border: 1px solid #28a745;
  background-color: #28a745;
  border-radius: 5px;
  color: #fff;
  padding: 5px;
  margin: 5px;
  font-weight: bold;
`;

const OpenImg = styled.span`
  filter: invert(99%) sepia(4%) saturate(1291%) hue-rotate(247deg)
    brightness(121%) contrast(100%);
`;

const Open = () => {
  return (
    <>
      <Openborder>
        <OpenImg>
          <OpenIcon></OpenIcon>
        </OpenImg>
        Open
      </Openborder>
    </>
  );
};

export default Open;
