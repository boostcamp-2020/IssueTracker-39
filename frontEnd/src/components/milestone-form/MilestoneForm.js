import React, {useState} from 'react';
import styled from 'styled-components';

const Form = styled.form`
padding:20px 0px;
border-top:1px solid lightgray;
border-bottom:1px solid lightgray;
`;
const Title = styled.div``;
const DueDate = styled.div``;
const Description = styled.div``;

const Label = styled.label`
display:block;
font-weight:bold;
font-size:15px;
margin-bottom:10px;
`;
const TextInput = styled.input`
width:40%;
padding:5px 5px;
font-size:18px;
margin-bottom:15px;
`;
const DescriptionInput = styled.textarea`
width:60%;
height:200px;
font-size:18px;
`;
const MilestoneForm = ({states, changes}) => {
  const {title,date,description} = states;
  const {titleChange,dateChange,descriptionChange} = changes;
  return (
    <Form>
      <Title>
        <Label htmlFor={'Title'}>Title</Label>
        <TextInput id={'Title'} placeholder={'마일스톤 이름을 입력해 주세요'} value={title} onChange={titleChange}></TextInput>
      </Title>
      <DueDate>
        <Label htmlFor={'DueDate'}>Due date (optional)</Label>
        <TextInput id={'DueDate'} type={"date"} value={date} onChange={dateChange}></TextInput>
      </DueDate>
      <Description>
        <Label htmlFor={'Description'}>Description (optional)</Label>
        <DescriptionInput id={'Description'} value={description} onChange={descriptionChange}></DescriptionInput>
      </Description>
    </Form>
  );
};
export default MilestoneForm;
