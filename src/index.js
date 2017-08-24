import React from 'react';
import ReactDOM from 'react-dom';
import './App1/index.css';
import './App1/App1.css';
import App1 from './App1/App1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App1 />, document.getElementById('root'));
registerServiceWorker();
