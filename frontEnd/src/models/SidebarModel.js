import React, {createContext, useState, useEffect, useReducer} from 'react';
import axiosMaker from '~/*/utils/axios/axiosMaker';

export const SidebarModelContext = createContext();

const SidebarModelConsumer = ({children}) => {
  const [labels, setLabel] = useState([]);
  const [milestone, setMilestone] = useState();
  const [assignees, setAssignees] = useState([]);

  const onUpdateLabels = (label) => {
    if (labels.includes(label)) {
      // 찾고, splice
      return;
    }
    setLabel([...labels, label]);
  };

  const onUpdateMilestone = (newMilestone) => {
    setMilestone(newMilestone);
  };

  const onUpdateAssignees = (assignee) => {
    if (assignees.includes(assignee)) {
      // 찾고, splice
      return;
    }
    setAssignees([...assignees, assignee]);
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
        requests
      }}
    >
      {children}
    </SidebarModelContext.Provider>
  );
};

export default SidebarModelConsumer;
