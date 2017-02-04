import React from 'react';
import {
  Nav,
  NavItem,
  Navbar,
  Image,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { IndexLink } from 'react-router';

export default ({header, items}) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <IndexLink>
          <Image
            className="logo"
            src="https://template.digikala.com/digikala/Image/Public/vtwo/digikala-logo-slogan.png"
          />
        </IndexLink>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {
          items.map((item, id) => (
            <LinkContainer key={id} to={{ pathname: item.link }}>
              <NavItem>{item.title}</NavItem>
            </LinkContainer>
          ))
        }
      </Nav>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="جستجو..." />
        </FormGroup>
        <Button type="submit">جستجو</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
);
