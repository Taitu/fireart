import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import configureStore from './configStore';
import Main from './Main';

const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(<Main store={ store } history={ history } />, document.getElementById('root'))
serviceWorker.unregister()