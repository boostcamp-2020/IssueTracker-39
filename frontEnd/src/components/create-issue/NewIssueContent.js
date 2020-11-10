import styled from 'styled-components';

const SectionWriteTitle = styled.div`
  margin: 0 8px;
  padding: 8px 0;
  width: 4em;
  transform: translateY(1px);
  text-align: center;
  border: 1px solid lightgray;
  border-bottom: 1px solid white;
  border-radius: 5px 5px 0 0;
`;

const NewIssueContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-width: 1px 0 0 0;
`;

const NewIssueContent = styled.textarea`
  height: 200px;
  min-height: 200px;
  padding: 8px;
  margin: 8px 8px 0 8px;
  border: 1px solid lightgray;
  border-bottom: 1px dotted lightgray;
  resize: vertical;
`;

const CharactersCounter = styled.div`
  position: relative;
  text-align: right;
  height: 0px;
  top: -20px;
  left: -20px;
  display: inline-block;
  visibility: ${(props) => props.visibility};
`;

export {
  SectionWriteTitle,
  NewIssueContent,
  NewIssueContentWrapper,
  CharactersCounter,
};
