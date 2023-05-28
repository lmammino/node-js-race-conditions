# node-js-race-conditions

A series of examples illustrating race conditions in Node.js and potential solutions.

Check out the code in the [`examples`](./examples) folder.

 - [`examples/race-dummy.js`](./examples/race-dummy.js): explores a simple race condition.
 - [`examples/race-simple-fix.js`](./examples/race-simple-fix.js): provides a simple solution using `async/await`.
 - [`examples/race-mutex.js`](./examples/race-mutex.js): provides a solution using mutexes (using the library [`async-mutex`](https://npm.im/async-mutex)).
 - [`examples/race-mutex-no-lib.js`](./examples/race-mutex-no-lib.js): provides a solution using mutexes (implementing the mutex pattern by ourselves).
 - [`examples/race-atomics.js`](./examples/race-atomics.js): provides a solution using `Atomics` (kindly implemented by @tysonrm)

These examples are illustrated in the article: [Node.js race conditions](https://www.nodejsdesignpatterns.com/blog/node-js-race-conditions).

[![Node.js race coditions](./assets/node-js-race-conditions.jpg)](https://www.nodejsdesignpatterns.com/blog/node-js-race-conditions)
