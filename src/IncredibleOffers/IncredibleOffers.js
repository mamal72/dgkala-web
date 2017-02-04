import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';

import IncredibleOffer from '../IncredibleOffer/IncredibleOffer'

export default ({ filter, errors, offers }) => {
  if (errors || !offers) {
    return (
      <Col md={12} className="text-center">
        <h3>
          خطایی در دریافت اطلاعات پیش آمده است. :(
        </h3>
        <h5>
          می‌توانید دوباره تلاش کنید.
        </h5>
        <pre>
          {errors.toString()}
        </pre>
      </Col>
    );
  }

  if (filter === 'application') {
    return renderOffers(offers.filter(offer => offer.OnlyForApplication === true), 'پیشنهادهای شگفت‌انگیز مخصوص اپلیکیشن')
  }

  if (filter === 'members') {
    return renderOffers(offers.filter(offer => offer.OnlyForMembers === true), 'پیشنهادهای شگفت‌انگیز مخصوص اعضا')
  }

  return renderOffers(offers, 'پیشنهادهای شگفت‌انگیز');
}

function renderOffers(offers, title) {
  if (!offers.length) {
    return (
      <Row>
        <Helmet title={title} />
        <Col md={12} className="text-center">
          <h3>
            پیشنهاد شگفت‌انگیزی یافت نشد. :(
          </h3>
        </Col>
      </Row>
    );
  }

  return (
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
