import React, {useContext, useEffect} from 'react';
import SideBar from '~/*/components/create-issue/Sidebar';

import {SidebarModelContext} from '~/*/models/SidebarModel';

const DetailIssueSidebar = ({issue}) => {
  const {
    onUpdateLabelList,
    onUpdateMilestone,
    onUpdateAssigneesList,
  } = useContext(SidebarModelContext);

  useEffect(() => {
    const {assigneeUser, labels} = issue;

    const assigneeKeys = assigneeUser.map(({idx}) => idx);
    const assigneeObj = {};
    for (let i in assigneeKeys) {
      assigneeObj[assigneeKeys[i]] = assigneeUser[i];
    }
    console.log(assigneeObj);
    onUpdateAssigneesList(assigneeObj);

    const labelKeys = labels.map(({idx}) => idx);
    const labelObj = {};
    for (let i in labelKeys) {
      labelObj[labelKeys[i]] = labels[i];
    }
    onUpdateLabelList(labelObj);
  }, [issue]);

  return (
    <>
      <SideBar />
    </>
  );
};

export default DetailIssueSidebar;
