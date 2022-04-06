import React, { Component } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

export default class R055_Tab extends Component {
    constructor(props) {
        super(props)
        this.state = { TabState: 'React' }

    }

    toggle = (tabnum) => {
        if (this.state.TabState !== tabnum) this.setState({ TabState: tabnum })
    }

    render() {
        return (
            <>
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={() => { this.toggle('React') }}>First Tabs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => { this.toggle('200') }}>Second Tabs</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.TabState}>
                    <TabPane tabId={'React'}><h3>React</h3></TabPane>
                    <TabPane tabId={'200'}><h3>200</h3></TabPane>
                </TabContent>


            </>
        );
    }


};
