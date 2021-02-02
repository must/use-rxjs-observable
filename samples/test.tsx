import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

import React from 'react';
import useRxJSObservable from '../src';


export default ({ x }: {x : number}) => {
  const count = useRxJSObservable(x, () => (
    interval(1000).pipe(
      map((i) => x + i + 1)
    )
  ));

  return <>{count}</>;
};
