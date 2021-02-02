import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

import React from 'react';
import useRxJSObservable from '../src';


export default ({ x }: {x : number}) => {
  const count = useRxJSObservable(x, () => (
    map((i: number) => x + i + 1)(
      interval(1000)
    )
  ));

  return <>{count}</>;
};
