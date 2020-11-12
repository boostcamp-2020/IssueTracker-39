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

    getDropDownItem(store).map((data) => {
      if (!milestone) {
        return;
      } else if (milestone.idx === data.idx) {
        onUpdateMilestone(data.idx, data);
        return;
      }
    });
  }, [issue]);

  const labelOnClick = async (labelIdx) => {
    const isInserted = !!!labels[labelIdx];
    const issueIdx = issue.idx;
    const method = isInserted ? 'post' : 'delete';
    const data = {issueIdx, labelIdx};
    await axiosMaker()[method]('/api/issueLabel', {data});
  };
  // const milestoneOnClick = async (labelIdx) => {
  //   const issueIdx = issue.idx;
  //   await axiosMaker().post("/api/issueLabel", {issueIdx,labelIdx});
  // };
  // const assigneeOnClick = async (labelIdx) => {
  //   const issueIdx = issue.idx;
  //   await axiosMaker().post("/api/issueLabel", {issueIdx,labelIdx});
  // };

  return (
    <>
      <SideBar detailLabelOnClick={labelOnClick} />
    </>
  );
};

export default DetailIssueSidebar;
