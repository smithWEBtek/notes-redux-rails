//Presentational component:
//Displays simple links to index and create route.

import {Navbar, NavItem, Nav} from 'react-bootstrap'
import React from 'react'

const NavigationBar = (props) =>

<Navbar>
  <Nav>
    <NavItem eventKey={1} href="/">
      Return to Index
    </NavItem>
    <NavItem eventKey={2} href="/notes/new">
    Create a new note!
    </NavItem>
  </Nav>
</Navbar>;

export default NavigationBar
