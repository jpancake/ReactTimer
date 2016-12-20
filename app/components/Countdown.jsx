/**
 * Created by PANCAK3 on 12/17/2016.
 */
import React, {Component} from 'react'
import Clock from 'clock'
import CountdownForm from 'countdownform'

export default class Countdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        }
        this._handleSetCountdown = this._handleSetCountdown.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this._startTimer()
                    break
            }
        }
    }

    _startTimer() {
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1
            this.setState({
                count: newCount >= 0 ? newCount : 0
            })
        }, 1000)
    }

    _handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        })
    }

    render() {
        let {count} = this.state
        return (
            <section>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this._handleSetCountdown} />
            </section>
        )
    }
}

