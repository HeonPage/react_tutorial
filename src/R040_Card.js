import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

export default class R040_Card extends Component {
    render() {
        return (
            <div>
                <Card style={{ border: "10px solid red", padding: "2px" }}>
                    <CardImg top height={"700px"} src="https://tpc.googlesyndication.com/simgad/6642666697656007798?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnxgmInk166kkV-NeWESQN9ubrUAg" alt='Card Image' />
                    <CardBody>
                        <CardTitle>Card 제목</CardTitle>
                        <CardSubtitle>카드 서브제목</CardSubtitle>
                        <CardText>카드 텍스트 본문 쓰는 곳</CardText>
                    </CardBody>

                </Card>
            </div>
        );
    }
};
