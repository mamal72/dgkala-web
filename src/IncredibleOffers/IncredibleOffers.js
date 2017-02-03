import React from 'react';
import { Row } from 'react-bootstrap';
import Helmet from 'react-helmet';

import IncredibleOffer from '../IncredibleOffer/IncredibleOffer'

export default ({ offers, filter }) => {
  if (filter === 'application') {
    return renderOffers(offers.filter(offer => offer.OnlyForApplication === true), 'پیشنهادهای شگفت‌انگیز مخصوص اپلیکیشن')
  }
  if (filter === 'members') {
    return renderOffers(offers.filter(offer => offer.OnlyForMembers === true), 'پیشنهادهای شگفت‌انگیز مخصوص اعضا')
  }
  return renderOffers(offers, 'پیشنهادهای شگفت‌انگیز');
}

function renderOffers(offers, title) {
  return(
    <Row>
      <Helmet title={title} />
      {
        offers.map((offer, id) => {
          return <IncredibleOffer key={id} {...offer} />
        })
      }
    </Row>
  )
}