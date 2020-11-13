import React, {useContext, useEffect} from 'react';
import SideBar from '~/*/components/create-issue/Sidebar';
import axiosMaker from '~/*/utils/axios/axiosMaker';

import {SidebarModelContext} from '~/*/models/SidebarModel';
import {MilestoneModelContext} from '~/*/models/MilestoneModel';
const DetailIssueSidebar = ({issue}) => {
  const {
    labels,
    onUpdateLabelList,
    onUpdateMilestone,
    onUpdateAssigneesList,
  } = useContext(SidebarModelContext);

  const {store, getDropDownItem, dispatch} = useContext(MilestoneModelContext);

  useEffect(() => {
    const {assigneeUser, labels, milestone} = issue;

    const assigneeKeys = assigneeUser.map(({idx}) => idx);
    const assigneeObj = {};
    for (let i in assigneeKeys) {
      assigneeObj[assigneeKeys[i]] = {
        idx: assigneeUser[i].idx,
        title: assigneeUser[i].userId,
      };
    }
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
    const isInsert = !!!labels[labelIdx];
    const issueIdx = issue.idx;
    const method = isInsert ? 'post' : 'delete';
    const data = {issueIdx, labelIdx};
    await axiosMaker()[method]('/api/issueLabel', isInsert ? data : {data});
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
