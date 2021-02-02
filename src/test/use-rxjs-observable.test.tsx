import React from 'react';
import { render } from 'react-dom';
import { should } from 'chai';
import register from 'jsdom-global';

import { interval, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import useRxJSObservable from '../index';


should();

describe('useRxJSObservable()', () => {
  beforeEach(function() {
    this.clean = register('<div id="root"/>');
  });

  afterEach(function() {
    this.clean();
  });

  it('should set the state appropriately with the initial value and some delay.', done => {
    const Comp = ({ text } : { text: string }) => {
      const debounced = useRxJSObservable('', (initial) => of(initial).pipe(
        delay(10),
        map((_) => text)
      ));

      return <>{debounced}</>;
    };

    render(<Comp text='hola'/>, document.getElementById('root'));
    setTimeout(() => {
      document.body.textContent!.should.equal('');
    }, 5);
    setTimeout(() => {
      document.body.textContent!.should.equal('hola');
      done();
    }, 30);
  });

  it('should update the state appropriately.', done => {
    const Comp = ({ initial } : { initial: number }) => {
      const counter = useRxJSObservable(initial, () => interval(10).pipe(
        map((i) => initial + i + 1)
      ));

      return <>{counter}</>;
    };

    render(<Comp initial={0} />, document.getElementById('root'));
    setTimeout(() => {
      document.body.textContent!.should.equal('0');
    }, 5);
    setTimeout(() => {
      document.body.textContent!.should.equal('1');
    }, 20);
    setTimeout(() => {
      document.body.textContent!.should.equal('2');
      done();
    }, 30);
  });
});
