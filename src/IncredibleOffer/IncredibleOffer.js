import React, { Component } from 'react';
import {
  Col,
  Panel,
  Button,
  Glyphicon,
  Image
} from 'react-bootstrap';

export default class extends Component {
  render() {
    const {
      Title,
      ImagePaths,
      Price,
      Discount,
      ProductId
    } = this.props;

    return (
      <Col sm={6} md={3}>
        <Panel
          className="text-center"
          header={Title}
          footer={
            <div>
              <h5>قیمت اصلی: {(Price / 10).toLocaleString()} تومان</h5>
              <h5>تخفیف: {(Discount / 10).toLocaleString()} تومان ({Math.round(Discount * 100 / Price)}٪)</h5>
              <h5>قیمت فعلی: {((Price - Discount) / 10).toLocaleString()} تومان</h5>
              <Button title="نمایش در دیجی‌کالا" target="_blank" bsSize="small" bsStyle="primary" href={`https://www.digikala.com/Product/DKP-${ProductId}`}>
                <Glyphicon glyph="eye-open"/>
              </Button>
            </div>
          }
        >
        <Image src={ImagePaths.Size180} />
        </Panel>
      </Col>
    );
  }
}
