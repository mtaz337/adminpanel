import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const header = () => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/Home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/addBanner">Loooonger NavLink</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    {/* <Nav.Link eventKey="link-3">Disabled</Nav.Link> */}
    <NavDropdown title="Banner Management" id="banner-management">
        <Nav.Link href="/addBanner">Add Banner</Nav.Link>
        <Nav.Link href="/addBanner">Delete Banner</Nav.Link>
        <Nav.Link href="/addBanner">Edit Banner</Nav.Link>
        <Nav.Link href="/addBanner">Set Banner</Nav.Link>
      </NavDropdown>
  </Nav.Item>
</Nav>
  );
};

export default header;