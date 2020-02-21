import React, { Component } from 'react';

export default class DigitalClicker extends Component {

    state = {
        timesClicked: 0
    }
    render() {
        return (<button onClick={this.handleClick}>{this.state.timesClicked}</button>);
    }

    handleClick = () => {
        this.setState(oldState => {
            return {timesClicked: oldState.timesClicked + 1}
        })
    }
}
