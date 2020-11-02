import React from 'react';
import IssueHeaderButtonPresenter from './ButtonPresenter';
const IssueHeaderButtonContainer = ({name, show}) => {
  return (
    <IssueHeaderButtonPresenter
      name={name}
      showModal={() => {
        console.log(name + ' clicked');
      }}
      show={show}
    ></IssueHeaderButtonPresenter>
  );
};

export default IssueHeaderButtonContainer;
