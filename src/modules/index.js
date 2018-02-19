import { combineReducers } from 'redux';
import { IntlReducer as Intl } from 'react-redux-multilingual';
import about from './about';
import home from './home';

const rootReducer = combineReducers({
  about,
  Intl,
  home
});

export default rootReducer;
