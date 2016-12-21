import React, {Component, PropTypes} from 'react'

export default class Controls extends Component {
    constructor(props) {
        super(props)
        this._onStatusChange = this._onStatusChange.bind(this)
    }
    _onStatusChange(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus)
        }
    }
    render() {
        let {countdownStatus} = this.props

        let renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this._onStatusChange('paused')}>Pause</button>
            } else {
                return <button className="button primary" onClick={this._onStatusChange('started')}>Start</button>
            }
        }

        return (
            <section className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this._onStatusChange('stopped')}>Clear</button>
            </section>
        )
    }
}

Controls.propTypes = {
    countdownStatus: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired
}
