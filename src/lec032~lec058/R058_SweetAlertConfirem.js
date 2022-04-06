import React, { Component } from 'react';
import Swal from 'sweetalert2';

export default class R058_SweetAlertConfirm extends Component {
    deleteAlert = (e) => {
        Swal.fire({
            title: '정말 삭제?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#4B088A',
            cancelButtonColor: "#01DF01",
            confirmButtonText: '예',
            cancelButtonText: "아니오"
        }).then((result) => {
            if (result.value) {
                document.getElementById('deleteId').remove();
                Swal.fire(
                    'Delete',
                    'sweetAlert2 삭제 완료',
                    'success'
                )
            }
        })
    }

    render() {
        return (
            <>
                <h1 id='deleteId' >sweetalert2</h1>
                <button onClick={e => this.deleteAlert()}>삭제</button>
            </>
        );
    }
};
