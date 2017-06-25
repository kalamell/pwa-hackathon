import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from './firebase';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
