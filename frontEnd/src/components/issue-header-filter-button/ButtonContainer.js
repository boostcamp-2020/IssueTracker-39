import React, {useState, useRef, useEffect} from 'react';
import clickOutSide from '~/*/utils/custom-hooks/clickOutSide';
import IssueHeaderButtonPresenter from './ButtonPresenter';

const IssueHeaderButtonContainer = ({name, isSidebar, detailLabelOnClick}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();
  clickOutSide(buttonRef, (e) => {
    setIsOpen(false);
  });
  const onClick = () => {
    setIsOpen((state) => !state);
  };
  return (
    <IssueHeaderButtonPresenter
      name={name}
      show={isOpen}
      onClick={onClick}
      reference={buttonRef}
      isSidebar={isSidebar}
      detailLabelOnClick={detailLabelOnClick}
    ></IssueHeaderButtonPresenter>
  );
};

export default IssueHeaderButtonContainer;
