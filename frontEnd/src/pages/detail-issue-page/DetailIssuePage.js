import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from '~/*/components/header/Header';
import SideBar from '~/*/components/create-issue/Sidebar';
import Title from './DetailIssueheader';
import Body from './DetailIssueContent';
import Comment from './DetailIssueComment';
import axiosMaker from '~/*/utils/axios/axiosMaker';
import {dummyIssue} from './dummyIssue';
import authorImage from '~/*/images/author.png';
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

const CommentWrapper = styled.div`
  display: flex;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

const Waapper = styled.div`
  margin-left: 20px;
  width: 100%;
  border: 1px solid rgb(127, 129, 129);
  border-radius: 5px;
`;

const DetailIssuePage = ({match}) => {
  const [issue, setIssue] = useState(dummyIssue);
  const [comment, setComment] = useState([]);

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
        console.log(data);
        console.log(comment);
      });
  }, []);

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
        />
        <BodyWrapper>
          <ContextWaapper>
            <div>
              <Body
                user={issue.authorUser.userId}
                content={issue.content}
                createdTime={issue.createdTime}
              />
              {comment.map((data) => {
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
            <CommentWrapper>
              <AuthorImage src={authorImage} />
              <Waapper>
                <Comment />
              </Waapper>
            </CommentWrapper>
          </ContextWaapper>
          <SideBar />
        </BodyWrapper>
      </IssueWrapper>
    </>
  );
};

export default DetailIssuePage;
