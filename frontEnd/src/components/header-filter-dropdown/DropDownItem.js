import React from 'react';
import style from 'styled-components';
const ContentWrapper = style.li`
padding:10px;
`;
const ContentTitle = style.p`
font-size:15px;
color:#474747;
margin-bottom:5px;
`;
const ContentDescription = style.p`
font-size:13px;
color:#A3A7AC;
`;
const DropDownItem = ({title, description}) => {
  return (
    <ContentWrapper>
      <ContentTitle>{title}</ContentTitle>
      <ContentDescription>{description}</ContentDescription>
    </ContentWrapper>
  );
};

export default DropDownItem;
