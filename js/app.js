import { getNegotiations } from './api.js';
import { debounceTime, take } from './operators.js';

const operacao = debounceTime(500, take(3, () => 
  getNegotiations()
    .then(negotiations => console.log(negotiations))
    .catch(err => console.log(err))
));

document
  .querySelector('#btn')
  .onclick = () => operacao();

// Same sample with RxJS
Rx.Observable
  .fromEvent(document.querySelector('#btn'), 'click')
  .debounceTime(500)
  .take(3)
  .mergeMap(() => Rx.Observable.fromPromise(getNegotiations()))
  .subscribe(
    negociacoes => console.log(negociacoes),
    err => console.log(err)
  );
