<div align="center">

<br>

# React Callbag Streams

[![tests](https://img.shields.io/github/workflow/status/must/use-rxjs-observable/Test%20and%20Report%20Coverage?label=tests&logo=mocha&logoColor=green&style=flat-square)](https://github.com/must/use-rxjs-observable/actions?query=workflow%3A%22Test+and+Report+Coverage%22)
[![coverage](https://img.shields.io/codecov/c/github/must/use-rxjs-observable?logo=codecov&style=flat-square)](https://codecov.io/gh/must/use-rxjs-observable)
[![version](https://img.shields.io/npm/v/use-rxjs-observable?logo=npm&style=flat-square)](https://www.npmjs.com/package/use-rxjs-observable)


</div>

<br>

Use [RxJS observables](https://rxjs-dev.firebaseapp.com/guide/observable) as a react hook. This work is based on / is an adaptation of [`react-callbag-streams`](https://github.com/loreanvictor/react-callbag-streams) and [`use-callbag`](https://github.com/Andarist/use-callbag)

```bash
npm i use-rxjs-observable
```

```tsx
import useRxJSObservable from 'use-rxjs-observable';

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

function App() {
  const initial = 5;
  const count = useRxJSObservable(initial, () => (
    interval(1000).pipe(
      map((i: number) => initial + i + 1)
    )
  ));

  return <>{count}</>;
}

```
[ ► Playground ](https://stackblitz.com/edit/use-rxjs-observable?file=index.tsx)

<br>

### Why not Callbags?

Only reason I can think of is if you already use RxJS and prefer it over Callbags and [callbag operators](https://loreanvictor.github.io/callbag-common/).

<br><br>

# Contribution

Be nice and respectful, more importantly super open and welcoming to all.

👉 Useful commands for working on this repo:
```bash
git clone https://github.com/must/use-rxjs-observable.git
```
```bash
npm i              # --> install dependencies
```
```bash
npm start          # --> serves `samples/index.tsx` on localhost:3000
```
```bash
npm test           # --> run all tests
```
```bash
npm run cov:view   # --> view code coverage
```
