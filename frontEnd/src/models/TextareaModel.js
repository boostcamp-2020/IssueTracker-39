import React, {createContext, useEffect, useState} from 'react';
import axiosMaker from '~/*/utils/axios/axiosMaker';

export const TextareaModelContext = createContext();
const durationTime = 2000;

const TextareaModelConsumer = ({children}) => {
  const [counter, setCounter] = useState();
  const [visibility, setVisibility] = useState('hidden');
  const [issueContent, setIssueContent] = useState('');

  const setCounterWithTextareaLength = (e) => {
    setCounter(e.target.value.length);
  };

  const issueContentChange = (e) => {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibility('hidden');
    }, durationTime);

    return () => {
      setVisibility('visible');
      clearTimeout(timer);
    };
  }, [counter]);

  return (
    <TextareaModelContext.Provider
      value={{
        setCounterWithTextareaLength,
        visibility,
        counter,
        issueContentChange,
        issueContent,
        requests,
      }}
    >
      {children}
    </TextareaModelContext.Provider>
  );
};

export default TextareaModelConsumer;
