/**
 * Created by PANCAK3 on 12/19/2016.
 */
import React, {Component, PropTypes} from 'react'

export default class CountdownForm extends Component {
    constructor (props) {
        super(props)
        this._onSubmit = this._onSubmit.bind(this)
    }
    _onSubmit (e) {
          e.preventDefault()
          let strSeconds = this.refs.seconds.value
          if (strSeconds.match(/^[0-9]*$/)) {
              this.refs.seconds.value = ''
              this.props.onSetCountdown(parseInt(strSeconds, 10))
          }
    }

    render () {
        return (
            <section>
                <form ref="form" onSubmit={this._onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </section>
        )
    }
}

CountdownForm.propTypes = {
    onSetCountdown: PropTypes.func
}

