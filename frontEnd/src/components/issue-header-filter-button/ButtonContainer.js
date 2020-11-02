import React from 'react';
import IssueHeaderButtonPresenter from './ButtonPresenter';
const IssueHeaderButtonContainer = ({name}) => {
  return (
    <IssueHeaderButtonPresenter
      name={name}
      showModal={() => {
        console.log(name + ' clicked');
      }}
      show={true}
    ></IssueHeaderButtonPresenter>
  );
};

export default IssueHeaderButtonContainer;
