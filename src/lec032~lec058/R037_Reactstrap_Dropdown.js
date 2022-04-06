import React, { Component } from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

export default class R037_Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>버튼 Dropdow</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>헤더</DropdownItem>
                    <DropdownItem disabled>비활성화 버튼</DropdownItem>
                    <a href='http://www.naver.com'>
                        <DropdownItem>naver</DropdownItem>
                    </a>
                    <DropdownItem onClick={e => alert("Alert")}>
                        alert
                    </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }


};
