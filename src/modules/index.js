import { combineReducers } from 'redux';
import { IntlReducer as Intl } from 'react-redux-multilingual';
import counter from './counter';
import about from './about';

const rootReducer = combineReducers({
  counter,
  about,
  Intl
});

export default rootReducer;
