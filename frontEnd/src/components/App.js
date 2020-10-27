import React from 'react';
import styled from 'styled-components';
const Header = styled.h1`
  background-color: tomato;
`;
const ComponentTwo = () => {
  return <div>im Two</div>;
};
const App = () => {
  return (
    <div>
      <Header>Hello, Webpack!! with hhReact</Header>
      <h2>
        <ComponentTwo />
      </h2>
    </div>
  );
};

export default App;
