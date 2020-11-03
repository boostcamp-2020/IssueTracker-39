import React, {useState, useRef, useEffect} from 'react';
import clickOutSide from '~/*/utils/custom-hooks/clickOutSide';
import IssueHeaderButtonPresenter from './ButtonPresenter';

const IssueHeaderButtonContainer = ({name}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();
  clickOutSide(buttonRef, () => {
    setIsOpen(false);
  });
  return (
    <IssueHeaderButtonPresenter
      name={name}
      showModal={() => {
        setIsOpen(true);
      }}
      show={isOpen}
      reference={buttonRef}
    ></IssueHeaderButtonPresenter>
  );
};

export default IssueHeaderButtonContainer;
