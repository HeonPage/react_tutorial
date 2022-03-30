import React, { Component } from 'react';

class R013_ArrowFunction extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            arrowFunc: 'React200',
            num: 3
        }
    }
    componentDidMount() {

        Function1(1);
        this.Function2(1, 1);
        this.Function3(1, 3);
        this.Function4();
        this.Function5(0, 2, 3);

        function Function1(num1) {
            return console.log(num1 + ' . ES5 Function')
        }
    }
    Function2 = (num1, num2) => {
        let num3 = num1 + num2;
        console.log(num3 + '. Arrow Function : ' + this.state.arrowFunc);
    }

    Function3() {
        var this_bind = this; //콜백함수에서는 this로 접근할 수 없기 때문에 접근할 수 있는 변수에 this를 백업한다
        setTimeout(function () {
            console.log(this_bind.state.num + '. ES5 Callback Function noBind :');
            console.log(this_bind.state.arrowFunc);
        }, 100)
    }

    Function4() {
        setTimeout(function () {
            console.log('4. Es5 Callback Function Bind : ' + this.state.arrowFunc);
        }.bind(this), 100);
    }

    Function5 = (num1, num2, num3) => {
        const num4 = num1 + num2 + num3;
        setTimeout(() => {
            console.log(num4 + '. Arrow Callback Function : ' + this.state.arrowFunc)
        }, 100);

    }
    render() {
        return (
            <h2>[THIS IS ArrowFunction]</h2>
        );
    }
}

export default R013_ArrowFunction;