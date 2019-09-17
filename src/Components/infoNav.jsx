import React from "react";
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class InfoNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      // <Router>

      <div>
        <Nav tabs className="custom-nav fixed-top">
          <NavItem>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Genres
            </DropdownToggle>
            <DropdownMenu className="dropdown-class">
              <DropdownItem>
                <Link to="/genre/fantasy">fantasy</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/genre/horror">horror</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/genre/romance">romance</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/genre/history">history</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/genre/scifi">scifi</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink className="float-right" href="/">
              Log-in | Signup
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      // </Router>
    );
  }
}
