/**
 * Created by PANCAK3 on 12/17/2016.
 */
import React, {Component} from 'react'
import Clock from 'clock'
import CountdownForm from 'countdownform'
import Controls from 'controls'

export default class Countdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        }
        this._handleSetCountdown = this._handleSetCountdown.bind(this)
        this._handleStatusChange = this._handleStatusChange.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
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
    _startTimer() {
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1
            this.setState({
                count: newCount >= 0 ? newCount : 0
            })
            if (newCount === 0) {
               this.setState({countdownStatus: 'stopped'})
            }
        }, 1000)
    }

    _handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        })
    }

    _handleStatusChange(newStatus) {
        this.setState({countdownStatus: newStatus})
    }

    render() {
        let {count, countdownStatus} = this.state

        let renderControlStatus = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this._handleStatusChange}/>
            } else {
                return <CountdownForm onSetCountdown={this._handleSetCountdown} />
            }
        }

        return (
            <section>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count}/>
                {renderControlStatus()}
            </section>
        )
    }
}

