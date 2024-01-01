// Greet class component with props.

import React, { Component } from 'react';

class ClassGreet extends Component {
    render() {
        const {name,lastName} = this.props;
        return (
            <div>
                <h1>ClassGreet, {name}.</h1>
                <div>{lastName}</div>
            </div>
        );
    }
}

export default ClassGreet;