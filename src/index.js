import React from 'react';
import ReactDOM from 'react-dom';
// import './App1/index.css';
// import './App1/App1.css';
// import App from './App';
// import App1 from './App1/App1';
// import App2 from './App2/App2';
import Main from './Main';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));

registerServiceWorker();
