/**
 * Created by PANCAK3 on 12/18/2016.
 */
import React, {Component} from 'react';

export default class Clock extends Component {
    static get defaultProps() {
        totalSeconds: 0;
    }
    _formatSeconds(totalSeconds) {
        let seconds = totalSeconds % 60,
            minutes = Math.floor(totalSeconds / 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return minutes + ':' + seconds;
    }

    render() {
        var {totalSeconds} = this.props;

        return (
            <section className="row align-middle">
                <div className="clock">
                    <span className="clock-text">
                        {this._formatSeconds(totalSeconds)}
                    </span>
                </div>
            </section>
        );
    }
}

Clock.propTypes = {
    totalSeconds: React.PropTypes.number
};