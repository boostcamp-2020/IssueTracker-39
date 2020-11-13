import React, {createContext, useState, useEffect, useReducer} from 'react';
import axiosMaker from '~/*/utils/axios/axiosMaker';
import * as _ from 'lodash';

export const SidebarModelContext = createContext();

const SidebarModelConsumer = ({children}) => {
  const [labels, setLabel] = useState({});
  const [milestone, setMilestone] = useState({});
  const [assignees, setAssignees] = useState({});

  const onUpdateLabels = (idx, labelData) => {
    if (labels[idx]) {
      const newLabels = _.cloneDeep(labels);
      delete newLabels[idx];
      setLabel(newLabels);
      return;
    }
    const newLabels = _.cloneDeep(labels);
    newLabels[idx] = labelData;
    setLabel(newLabels);
  };

  const onUpdateLabelList = (labelList) => {
    setLabel(labelList);
  };

  const onUpdateAssigneesList = (assigneeList) => {
    setAssignees(assigneeList);
  };

  const onUpdateMilestone = (idx, newMilestoneData) => {
    if (milestone[idx]) {
      const newMilestone = _.cloneDeep(milestone);
      delete newMilestone[idx];
      setMilestone(newMilestone);
      return;
    }
    let newMilestone = {};
    newMilestone[idx] = newMilestoneData;
    setMilestone(newMilestone);
  };

  const onUpdateAssignees = (idx, assigneeData) => {
    if (assignees[idx]) {
      const newAssignees = _.cloneDeep(assignees);
      delete newAssignees[idx];
      setAssignees(newAssignees);
      return;
    }
    const newAssignees = _.cloneDeep(assignees);
    newAssignees[idx] = assigneeData;
    setAssignees(newAssignees);
  };

  const [issueTitle, setIssueTitle] = useState('');
  const [issueContent, setIssueContent] = useState('');

  const onUpdateIssueTitle = (e) => {
    setIssueTitle(e.target.value);
  };

  const onUpdateIssueContent = (e) => {
    setIssueContent(e.target.value);
  };

  const requestImageUpload = async (formData) => {
    const axiosInstance = axiosMaker();
    const result = await axiosInstance.post('/api/issue/image', formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    if (result.status === 200) {
      setIssueContent((content) => content + result.data.filename);
    }
  };

  const requests = {
    requestImageUpload,
  };

  return (
    <SidebarModelContext.Provider
      value={{
        labels,
        onUpdateLabels,
        onUpdateLabelList,
        milestone,
        onUpdateMilestone,
        assignees,
        onUpdateAssignees,
        onUpdateAssigneesList,
        issueTitle,
        onUpdateIssueTitle,
        issueContent,
        onUpdateIssueContent,
        requests,
        setIssueContent,
      }}
    >
      {children}
    </SidebarModelContext.Provider>
  );
};

export default SidebarModelConsumer;
