import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import dgkalaReducer from './reducers';
import { fetchIncredibleOffers } from './IncredibleOffers/module'

export default compose(
  applyMiddleware(thunk)
)(createStore)(
  dgkalaReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export function initiateStore(store) {
  store.dispatch(fetchIncredibleOffers());
}