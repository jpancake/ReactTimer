'use strict'
import expect from 'expect' /* globals describe, it, done */
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Countdown from 'countdown'

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist()
    })

    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', () => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown._handleSetCountdown(10)

            expect(countdown.state.count).toBe(10)
            expect(countdown.state.countdownStatus).toBe('started')

            setTimeout(() => {
                expect(countdown.state.count).toBe(9)
                done()
            }, 1001)
        })

        it('should never set count less than zero', () => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown._handleSetCountdown(1)

            setTimeout(() => {
                expect(countdown.state.count).toBe(0)
            }, 3001)
        })

        it('should pause countdown on pause status', () => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown._handleSetCountdown(3)
            countdown._handleStatusChange('paused')
            setTimeout(() => {
                expect(countdown.state.count).toBe(3)
                expect(countdown.state.countdownStatus).toBe('paused')
            }, 1001)
        })

        it('should reset count on stopped status', () => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown._handleSetCountdown(3)
            countdown._handleStatusChange('stopped')
            setTimeout(() => {
                expect(countdown.state.count).toBe(0)
                expect(countdown.state.countdownStatus).toBe('stopped')
            }, 1001)
        })
    })
})
