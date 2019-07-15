//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public

import React from 'react';
import ReactDOM from 'react-dom';
import WhatToEatApp from './components/WhatToEatApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<WhatToEatApp />, document.getElementById('app'));
