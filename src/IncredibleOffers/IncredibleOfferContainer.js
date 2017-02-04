import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridLoader } from 'halogen';

import IncredibleOffers from './IncredibleOffers';

const mapStateToProps = (state, props) => {
  return {
    offers: state.incredibleOffers.data,
    errors: state.incredibleOffers.errors,
    isLoading: state.incredibleOffers.isLoading,
    filter: props.filter
  }
};

class IncredibleOfferContainer extends Component {
  render() {
    const {offers, errors, isLoading, filter} = this.props;

    if (isLoading) {
      return (
        <div className="spinner">
          <GridLoader color={'#999'}/>
        </div>
      );
    }

    return (
      <IncredibleOffers filter={filter} errors={errors} offers={offers}/>
    );
  }
}

export default connect(mapStateToProps)(IncredibleOfferContainer);
