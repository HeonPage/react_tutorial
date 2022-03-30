import React, { PureComponent } from 'react';

class R028_PureComponentClass extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            StateString: 'react',
            StateArrayObj: ['react', { react: '200' }]
        }
    }

    buttonClick = (type) => {
        if (type === 'String') {
            this.setState({ StateString: 'awesome' });
        } else {
            this.setState({ StateArrayObj: ['react', { react: '222' }] })
        }
    }

    render() {
        console.log('render() 실행')
        return (
            <div>
                {this.state.StateString}
                {this.state.StateArrayObj[1].react}
                <button onClick={e => this.buttonClick('String')}>문자열 변경</button>
                <button onClick={e => this.buttonClick('ArrayObject')}>객체 배열 변경</button>
            </div>
        )
    }
}

export default R028_PureComponentClass;