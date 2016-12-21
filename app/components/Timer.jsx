'use strict'
import React, {Component} from 'react'
import Clock from 'clock'
import Controls from 'controls'

export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            timerStatus: 'stopped'
        }
        this._handleStatusChange = this._handleStatusChange.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this._startTimer()
                    break
                case 'stopped':
                    this.setState({count: 0})
                    // fall through
                case 'paused':
                    clearInterval(this.timer)
                    this.timer = undefined
                    break
            }
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer)
        this.timer = undefined
    }
    _startTimer () {
        this.timer = setInterval(() => {
            let newCount = this.state.count + 1
            this.setState({
                count: newCount
            })
        }, 1000)
    }
    _handleStatusChange(newTimerStatus) {
        this.setState({timerStatus: newTimerStatus})
    }
    render() {
        let {count, timerStatus} = this.state

        return (
            <section>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count} />
                <Controls countdownStatus={timerStatus} onStatusChange={this._handleStatusChange} />
            </section>
        )
    }
}
