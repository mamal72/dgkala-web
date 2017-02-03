import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import IncredibleOffersContainer from './IncredibleOffers/IncredibleOfferContainer';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={IncredibleOffersContainer} />
    <Route path="/special-offers" component={IncredibleOffersContainer} />
    <Route path="/special-offers/:filter" component={IncredibleOffersContainer} />
  </Route>
);
