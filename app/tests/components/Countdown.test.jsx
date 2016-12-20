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

        it('countdown should not be negative', () => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown._handleSetCountdown(1)

            setTimeout(() => {
                expect(countdown.state.count).toBe(0)
                done()
            }, 3001)
        })
    })
})
