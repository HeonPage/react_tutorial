import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class R054_Table extends Component {
    render() {
        return (
            <Table dark striped hover>
                <thead>
                    <tr>
                        <th>no</th>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>React</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <th scope='row'>1</th>
                        <td>React</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <th scope='row'>1</th>
                        <td>React</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <th scope='row'>1</th>
                        <td>React</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <th scope='row'>1</th>
                        <td>React</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <th scope='row'>1</th>
                        <td>React</td>
                        <td>29</td>
                    </tr>

                </tbody>
            </Table>
        );
    }
};
