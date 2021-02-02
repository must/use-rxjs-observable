import { Observable } from 'rxjs';
import { useEffect, useState } from 'react';


export default function useRxJSObservable<T>(initialState: T, factory: (x: T) => Observable<T>) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const subscription = factory(initialState).subscribe(setState);

    return () => subscription.unsubscribe();
  }, []);

  return state;
}
