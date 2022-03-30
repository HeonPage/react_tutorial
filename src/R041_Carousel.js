import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const item = [
    {
        src: 'https://tpc.googlesyndication.com/simgad/6642666697656007798?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnxgmInk166kkV-NeWESQN9ubrUAg',
        altText: '슬라이드1',
        caption: '슬라이드1 설명',
        header: '슬라이드1 헤더'
    },
    {
        src: 'https://ssl.pstatic.net/tveta/libs/1386/1386645/178ac6716193e7721a6f_20220330114420696.jpg',
        altText: '슬라이드2',
        caption: '슬라이드2 설명',
        header: '슬라이드2 헤더'
    },
    {
        src: 'https://ssl.pstatic.net/tveta/libs/1381/1381522/92474f7dc3cf65c39c3f_20220324095806062.jpg',
        altText: '슬라이드3',
        caption: '슬라이드3 설명',
        header: '슬라이드3 헤더'
    }
]


export default class R041_carousel extends Component {
    render() {
        return (
            <UncontrolledCarousel items={item} />
        );
    }
};
