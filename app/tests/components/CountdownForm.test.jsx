import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';
import CountdownForm from 'countdownform';

describe('CountdownForm', () => {
   it('should exist', () => {
       expect(CountdownForm).toExist();
   });

   it('should call onSetCountdown if valid seconds entered', () => {
     let spy = expect.createSpy(),
         countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>),
         $el = $(ReactDOM.findDOMNode(countdownForm));

     countdownForm.refs.seconds.value = '109';
     TestUtils.Simulate.submit($el.find('form')[0]);

     expect(spy).toHaveBeenCalledWith(109);
   });

    it('should NOT call onSetCountdown if invalid seconds entered', () => {
        let spy = expect.createSpy(),
            countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>),
            $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = 'one hundred fifty';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    })
});
