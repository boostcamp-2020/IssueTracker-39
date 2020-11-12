import React, {useContext, useEffect} from 'react';
import SideBar from '~/*/components/create-issue/Sidebar';

import {SidebarModelContext} from '~/*/models/SidebarModel';

const DetailIssueSidebar = ({issue}) => {
  const {onUpdateLabels, onUpdateMilestone, onUpdateAssignees} = useContext(
    SidebarModelContext,
  );

  useEffect(() => {
    issue.assigneeUser.map((data) => {
      let input = {};
      input.title = data.userId;
      onUpdateAssignees(data.idx, input);
    });

    issue.labels.map((data) => {
      let input = {};
      input.title = data.title;
      input.color = data.color;
      input.description = data.description;
      onUpdateLabels(data.idx, input);
    });
  }, []);

  return (
    <>
      <SideBar />
    </>
  );
};

export default DetailIssueSidebar;
