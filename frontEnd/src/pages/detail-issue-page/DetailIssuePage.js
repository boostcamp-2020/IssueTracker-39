import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from '~/*/components/header/Header';
import Title from './DetailIssueheader';
import Body from './DetailIssueContent';
import axiosMaker from '~/*/utils/axios/axiosMaker';
import {dummyIssue} from './dummyIssue';
import DetailIssueCommentCreate from './DetailIssueCommentCreate';
import DetailIssueSidebar from './DetailIssueSideBar';
import SidebarModelConsumer from '~/*/models/SidebarModel';
import MilestoneModelConsumer from '~/*/models/MilestoneModel';

const IssueWrapper = styled.main`
  max-width: 1280px;
  margin: 30px auto;
`;

const BodyWrapper = styled.div`
  display: flex;
`;
const ContextWaapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-right: 10px;
`;

const DetailIssuePage = ({match}) => {
  const [issue, setIssue] = useState(dummyIssue);
  const [comment, setComment] = useState([]);
  const [change, setChange] = useState(false);

  const onChange = () => {
    setChange(!change);
  };

  useEffect(() => {
    axiosMaker()
      .get(`/api/issue/${match.params.idx}`)
      .then(({data}) => {
        setIssue(data);
      });
    axiosMaker()
      .get(`/api/comment/list/${match.params.idx}`)
      .then(({data}) => {
        setComment(data);
      });
  }, [change]);

  return (
    <>
      <Header></Header>
      <IssueWrapper>
        <Title
          title={issue.title}
          idx={issue.idx}
          createdTime={issue.createdTime}
          author={issue.authorUser.userId}
          status={issue.status}
          count={comment.length}
          onChange={onChange}
        />
        <BodyWrapper>
          <ContextWaapper>
            <div>
              <Body
                idx={issue.idx}
                user={issue.authorUser.userId}
                content={issue.content}
                createdTime={issue.createdTime}
                onChange={onChange}
                flag={'issue'}
              />
              {comment.map((data) => {
                return (
                  <Body
                    idx={data.idx}
                    user={data.user.userId}
                    content={data.content}
                    createdTime={data.createdTime}
                    onChange={onChange}
                    flag={'comment'}
                    key={data.idx}
                  />
                );
              })}
              <hr></hr>
            </div>
            <DetailIssueCommentCreate
              status={issue.status}
              idx={issue.idx}
              onChange={onChange}
            />
          </ContextWaapper>
          <MilestoneModelConsumer>
            <SidebarModelConsumer>
              <DetailIssueSidebar issue={issue} />
            </SidebarModelConsumer>
          </MilestoneModelConsumer>
        </BodyWrapper>
      </IssueWrapper>
    </>
  );
};

export default DetailIssuePage;
