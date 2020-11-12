import React, {createContext, useState, useEffect, useReducer} from 'react';
export const SidebarModelContext = createContext();

const SidebarModelConsumer = ({children}) => {
  const [labels, setLabel] = useState([]);
  const [milestone, setMilestone] = useState();
  const [assignees, setAssignees] = useState([]);

  const onUpdateLables = (label) => {
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

  return (
    <SidebarModelContext.Provider
      value={{
        labels,
        onUpdateLables,
        milestone,
        onUpdateMilestone,
        assignees,
        onUpdateAssignees,
        issueTitle,
        onUpdateIssueTitle,
        issueContent,
        onUpdateIssueContent,
      }}
    >
      {children}
    </SidebarModelContext.Provider>
  );
};

export default SidebarModelConsumer;
