'use strict'
import expect from 'expect' /* globals describe, it */
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import $ from 'jQuery'
import Timer from 'timer'

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist()
    })
    it('should start timer on started status', () => {
        let timer = TestUtils.renderIntoDocument(<Timer/>)

        timer._handleStatusChange('started')
        expect(timer.state.count).toBe(0)
        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started')
            expect(timer.state.count).toBe(1)
        }, 1001)
    })
    it('should pause timer on paused status', () => {
        let timer = TestUtils.renderIntoDocument(<Timer/>)
        timer.setState({count: 10})
        timer._handleStatusChange('started')
        timer._handleStatusChange('paused')
        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('paused')
            expect(timer.state.count).toBe(10)
        }, 1001)
    })
    it('should reset count on stopped status', () => {
        let timer = TestUtils.renderIntoDocument(<Timer/>)
        timer.setState({count: 10})
        timer._handleStatusChange('started')
        timer._handleStatusChange('stopped')
        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('stopped')
            expect(timer.state.count).toBe(0)
        }, 1001)
    })
})
