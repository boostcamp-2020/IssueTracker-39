import React, {useContext} from 'react';
import styled from 'styled-components';
import ColorBoxItem from './ColorBoxItem';

const ContentWrapper = styled.li`
  padding: 10px;
  background-color: ${(props) => (props.selected ? '#DAFFFF' : 'white')};
  font-weight: ${(props) => (props.selected ? 'bold' : '')};
`;
const ContentTitle = styled.p`
  font-size: 15px;
  color: #474747;
  margin-bottom: 5px;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ContentDescription = styled.p`
  font-size: 13px;
  color: #a3a7ac;
`;

const DropDownItem = ({title, description, color, onClick, selected}) => {
  return (
    <ContentWrapper onClick={() => onClick(title)} selected={selected}>
      <TitleWrapper>
        {color ? <ColorBoxItem color={color} /> : null}
        <ContentTitle>{title}</ContentTitle>
      </TitleWrapper>
      <ContentDescription>{description}</ContentDescription>
    </ContentWrapper>
  );
};

export default DropDownItem;
