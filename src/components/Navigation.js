import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

class Navigation extends React.Component {
	constructor(props) {
		super(props);

	    this.toggle = this.toggle.bind(this);
	    this.state = {
	    	isOpen: false
	    };
	}

	toggle() {
    	this.setState({
    		isOpen: !this.state.isOpen
    	});
  	}

	render() {
		return(
			<div className="navigation-container">
				<Navbar color="light" light expand="md">
			        <NavbarBrand href="/">christopher ngai</NavbarBrand>
			        <NavbarToggler onClick={this.toggle} />
			        <Collapse isOpen={this.state.isOpen} navbar>
			            <Nav className="ml-auto" navbar>
			            	<NavItem>
			                	<NavLink href="#">about</NavLink>
			            	</NavItem>
			            	<NavItem>
			                	<NavLink href="#">experience</NavLink>
			            	</NavItem>
			            	<NavItem>
			            		<NavLink href="#">projects</NavLink>
			            	</NavItem>
			            	<NavItem>
			            		<NavLink href="#">skills</NavLink>
			            	</NavItem>
			            </Nav>
			        </Collapse>
		        </Navbar>
			</div>
		);
	}
}

export default Navigation;

