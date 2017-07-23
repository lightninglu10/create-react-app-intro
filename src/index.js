import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configure, history } from './config/configure-store';

const store = configure();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/App/App', () => {
        const NextApp = require('./containers/App/App').default;
        ReactDOM.render(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <NextApp />
                </ConnectedRouter>
            </Provider>,
            document.getElementById('root')
        );
    });
    window.store = store;
}

registerServiceWorker();