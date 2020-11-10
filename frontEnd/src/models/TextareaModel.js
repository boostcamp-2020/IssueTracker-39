import React, {createContext, useEffect, useState} from 'react';

export const TextareaModelContext = createContext();

const durationTime = 2000;

const TextareaModelConsumer = ({children}) => {
  const [counter, setCounter] = useState();
  const [visibility, setVisibility] = useState('hidden');

  const setCounterWithTextareaLength = (e) => {
    setCounter(e.target.value.length);
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
      value={{setCounterWithTextareaLength, visibility, counter}}
    >
      {children}
    </TextareaModelContext.Provider>
  );
};

export default TextareaModelConsumer;
