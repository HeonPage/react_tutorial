import React, { Component } from 'react';
import Swal from 'sweetalert2';

export default class R056_SweetAlertBasic extends Component {
    componentDidMount() {
        // Swal.fire('1.SweetAlert')
        // alert('2.alert')
        Swal.fire('1. SweetAlert').then(result => { alert('2. result.value : ' + result.value) })
    }

    render() {
        return (
            <>
                <h1>SweetAlert</h1>
            </>
        );
    }
}
