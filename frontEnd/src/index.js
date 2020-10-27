import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App.js';
console.log(App);
console.log(document.getElementById('app'));

ReactDom.render(<App />, document.getElementById('app'));
