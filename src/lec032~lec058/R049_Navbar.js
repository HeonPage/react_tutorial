import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default class R049_Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { collapse: false }
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse })
    }

    render() {
        return (
            <Navbar color='faded' light>
                <NavbarBrand href='https://www.naver.com' className='mr-auto'>Navbar</NavbarBrand>
                <NavbarText>sadsa</NavbarText>
                <NavbarText>sadsa</NavbarText>
                <NavbarText>sadsa</NavbarText>
                <NavbarToggler onClick={this.toggle} className='mr-2' />

                <Collapse isOpen={this.state.collapse} navbar>
                    <Nav Navbar>
                        <NavItem href='#'>
                            <NavLink href="#">React</NavLink>
                        </NavItem>
                        <NavItem href='#'>
                            <NavLink href="#">React</NavLink>
                        </NavItem>
                        <NavItem href='#'>
                            <NavLink href="#">React</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }



};
