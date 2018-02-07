import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text || '받은게 없어요~'
        };
    }

    handleClick() {
        alert('clicked');
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={this.handleClick.bind(this)}>Click Here</button>
            </div>
        );
    }
}
