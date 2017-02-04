import { getIncredibleOffers as getIncredibleOffersApi } from './api';

// Actions

export const FETCH_INCREDIBLE_OFFERS = 'FETCH_INCREDIBLE_OFFERS';
export const FETCH_INCREDIBLE_OFFERS_SUCCEED = 'FETCH_INCREDIBLE_OFFERS_SUCCEED';
export const FETCH_INCREDIBLE_OFFERS_FAILED = 'FETCH_INCREDIBLE_OFFERS_FAILED';


// Reducer

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case FETCH_INCREDIBLE_OFFERS:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_INCREDIBLE_OFFERS_SUCCEED:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };

    case FETCH_INCREDIBLE_OFFERS_FAILED:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };

    default: return state;
  }
}


// Action Creators

export function fetchingIncredibleOffers() {
  return {
    type: FETCH_INCREDIBLE_OFFERS
  };
}

export function fetchIncredibleOffers() {
  return async (dispatch) => {
    try {
      dispatch(fetchingIncredibleOffers());
      const data = await getIncredibleOffersApi();
      dispatch(fetchIncredibleOffersSucceed(data));
    } catch (e) {
      dispatch(fetchIncredibleOffersFailed(e));
    }
  };
}

export function fetchIncredibleOffersSucceed(data) {
  return {
    type: FETCH_INCREDIBLE_OFFERS_SUCCEED,
    data
  };
}

export function fetchIncredibleOffersFailed(data) {
  return {
    type: FETCH_INCREDIBLE_OFFERS_FAILED,
    data
  };
}
