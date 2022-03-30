import React, { Component } from 'react';

class R010_Variable extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        var varName = 'reatc';
        console.log('varName1 : ' + varName)
        var varName = '200'; //varName is already defined no-redeclare
        console.log('varName2 : ' + varName)

        let letName = 'reatc';
        console.log('letName1 : ' + letName)
        // let letName = '200'; 
        //Parsing error : Identifier 'letName' has alreay been declared
        console.log('letName2 : ' + letName)

        const constName = 'reatc';
        console.log('constName1 : ' + constName)
        // const constName = '200';
        //Parsing error : Identifier 'letName' has alreay been declared
        console.log('constName2 : ' + constName)
        //Uncaught TypeError: Assignment to constant variable.


    }
    render() {
        return (
            <h2>[THIS IS Variable]</h2>
        );
    }
}

export default R010_Variable;