import React from 'react';
import IssueHeaderButtonPresenter from './ButtonPresenter';
const IssueHeaderButtonContainer = ({name}) => {
  return (
    <IssueHeaderButtonPresenter
      name={name}
      showModal={() => {
        console.log(name + ' clicked');
      }}
    ></IssueHeaderButtonPresenter>
  );
};

export default IssueHeaderButtonContainer;
