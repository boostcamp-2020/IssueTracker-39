import React, {createContext, useState, useEffect, useReducer} from 'react';
import axiosMaker from '~/*/utils/axios/axiosMaker';
import * as _ from 'lodash';

export const SidebarModelContext = createContext();

const SidebarModelConsumer = ({children}) => {
  const [labels, setLabel] = useState({});
  const [milestone, setMilestone] = useState({});
  const [assignees, setAssignees] = useState([]);

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

  const onUpdateMilestone = (newMilestone) => {
    if (milestone === newMilestone.idx) {
      setMilestone('');
      return;
    }
    setMilestone(newMilestone.idx);
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
        milestone,
        onUpdateMilestone,
        assignees,
        onUpdateAssignees,
        issueTitle,
        onUpdateIssueTitle,
        issueContent,
        onUpdateIssueContent,
        requests,
      }}
    >
      {children}
    </SidebarModelContext.Provider>
  );
};

export default SidebarModelConsumer;
