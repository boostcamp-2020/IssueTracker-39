import React from 'react';
import styled from 'styled-components';
import CalendarSVG from '~/*/images/calendarSVG';

const fontColor = '#9E9E9E'
const Title = styled.div`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 500;
`;
const DueDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
const DayDescription = styled.p`
  color: ${fontColor};
  margin-left:5px;
`;
const Description = styled.div`
color:${fontColor};
`;

function extractMonthDateYear(date) {
  const dateObject = new Date(date);
  const extracted = dateObject.toDateString().split(' ');
  return {
    month: extracted[1],
    date: extracted[2],
    year: extracted[3],
  };
}

const MilestoneDetail = ({title, dueDate, description}) => {
  const {month, date, year} = extractMonthDateYear(dueDate);
  return (
    <>
      <Title>{title}</Title>
      <DueDate>
        <CalendarSVG color={`${fontColor}`} />
        <DayDescription>
          Due by {month} {date} {year}
        </DayDescription>
      </DueDate>
      {description ? <Description>{description}</Description> : null}
    </>
  );
};

export default MilestoneDetail;
