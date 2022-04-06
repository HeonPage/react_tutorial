import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class R050_Pagination extends Component {
    pagination = (type) => {
        alert("Go " + type)
    }

    render() {
        return (
            <>
                <Pagination size='lg' aria-label='Page navigation ex'>
                    <PaginationItem>
                        <PaginationLink previous onClick={e => this.pagination("previous")} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous onClick={e => this.pagination("1")} >1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous onClick={e => this.pagination("2")} >2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous onClick={e => this.pagination("3")} >3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next onClick={e => this.pagination("next")} />
                    </PaginationItem>


                </Pagination>

            </>
        );
    }

};
