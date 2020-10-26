import React from "react";
const ComponentTwo = () => {
  return <div>im Two</div>;
};
const App = () => {
  return (
    <div>
      <h1>Hello, Webpack!! with hhReact</h1>
      <h2>
        <ComponentTwo />
      </h2>
    </div>
  );
};

export default App;
