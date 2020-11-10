import React from 'react';
import styled from 'styled-components';
import Header from '~/*/components/header/Header';
import SideBar from '~/*/components/create-issue/SideBar';
import Title from './DetailIssueheader';
import Body from './DetailIssueContent';
import Comment from './DetailIssueComment';

import {dummyIssue, dummyComment} from './dummyIssue';

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

const DetailIssuePage = () => {
  // 몇 번째 글인지 알아야하니까 /:idx 로 요청해서 하나 가져오고
  // /list/:issueIdx 로 댓글도 가져오고
  return (
    <>
      <Header></Header>
      <IssueWrapper>
        <Title
          title={dummyIssue.title}
          idx={dummyIssue.idx}
          createdTime={dummyIssue.createdTime}
          author={dummyIssue.authorUser.userId}
          status={dummyIssue.status}
          count={dummyComment.length}
        />
        <BodyWrapper>
          <ContextWaapper>
            <div>
              <Body
                user={dummyIssue.authorUser.userId}
                content={dummyIssue.content}
                createdTime={dummyIssue.createdTime}
              />
              {dummyComment.map((data) => {
                return (
                  <Body
                    user={data.user.userId}
                    content={data.content}
                    createdTime={data.createdTime}
                    key={data.idx}
                  />
                );
              })}
              <hr></hr>
            </div>
            <Comment />
          </ContextWaapper>
          <SideBar />
        </BodyWrapper>
      </IssueWrapper>
    </>
  );
};

export default DetailIssuePage;
