import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-redux-multilingual';
import translations from './translations';

import rootReducer from './modules';
import App from './components/App';
import Home from './containers/HomeContainer';
import About from './containers/AboutContainer';
import { IntlActions } from 'react-redux-multilingual';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
store.dispatch(IntlActions.setLocale('fi'));

const routes = (
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </App>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider translations={translations} locale="fi">
      {routes}
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
