import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridLoader } from 'halogen';

import IncredibleOffers from './IncredibleOffers';

const mapStateToProps = (state, props) => {
  return {
    offers: state.incredibleOffers.data,
    isLoading: state.incredibleOffers.isLoading,
    filter: props.filter
  }
};

class IncredibleOfferContainer extends Component {
  render() {
    const {offers, isLoading, filter} = this.props;
    if (isLoading) {
      return (
        <div className="spinner">
          <GridLoader color={'#999'}/>
        </div>
      );
    }
    return (
      <IncredibleOffers filter={filter} offers={offers}/>
    );
  }
}

export default connect(mapStateToProps)(IncredibleOfferContainer);
