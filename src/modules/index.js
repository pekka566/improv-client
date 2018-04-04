import { combineReducers } from 'redux';
import { IntlReducer as Intl } from 'react-redux-multilingual';
import about from './about';
import home from './home';
import login from './login';

const rootReducer = combineReducers({
  about,
  Intl,
  home,
  login
});

export default rootReducer;
