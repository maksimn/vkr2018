const mongoRepository = require('./mongoRepository');

function promiseChain() {
    let promise = new Promise(arguments[0]);

    for (let i = 1; i < arguments.length; i++) {
        promise = promise.then(
            () => (new Promise(arguments[i])),
            err => { console.log(err); }
        );
    }

    promise.catch(err => {
        console.log(err);
    });
}

module.exports = promiseChain;