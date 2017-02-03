import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import incredibleOffers from './IncredibleOffers/module';

export default combineReducers({
  incredibleOffers,
  routing
});