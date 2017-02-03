import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import IncredibleOffersContainer from './IncredibleOffers/IncredibleOfferContainer';
import Navbar from './Navbar/Navbar';

class App extends Component {
  render() {
    const navigationMenuData = {
      header: 'دیجی‌کالا',
      items: [
        {
          title: 'پیشنهادهای شگفت‌انگیز',
          link: '/special-offers'
        },
        {
          title: 'فقط کاربران',
          link: '/special-offers/members'
        },
        {
          title: 'فقط اپلیکیشن',
          link: '/special-offers/application'
        }
      ]
    };
    const filter = this.props.params.filter;
    return (
      <Grid>
        <Navbar {...navigationMenuData} />
        <IncredibleOffersContainer filter={filter}/>
      </Grid>
    );
  }
}

export default App;
