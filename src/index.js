import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BCQApp from './BCQApp.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BCQApp />, document.getElementById('root'));
registerServiceWorker();
