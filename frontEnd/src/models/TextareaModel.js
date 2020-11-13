import React, {createContext, useEffect, useState} from 'react';

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
      }}
    >
      {children}
    </TextareaModelContext.Provider>
  );
};

export default TextareaModelConsumer;
