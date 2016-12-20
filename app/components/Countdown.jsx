/**
 * Created by PANCAK3 on 12/17/2016.
 */
import React, {Component} from 'react';
import Clock from 'clock';
import CountdownForm from 'countdownform'

export default class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this._handleSetCountdown = this._handleSetCountdown.bind(this);
    }

    _handleSetCountdown(seconds) {
        this.setState({
            count: seconds
        });
    }

    render() {
        let {count} = this.state;
        return (
            <section>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this._handleSetCountdown} />
            </section>
        )
    }
}