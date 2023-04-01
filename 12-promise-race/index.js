function race(arrayPromises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arrayPromises.length; i++) {
            Promise.resolve(arrayPromises[i])
                .then(resolve, reject)
                .catch(reject);
        }
    })
}

const promise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, '1');
});

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 0, '2');
});

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, '3');
});
race([promise1, promise2, promise3])
    .then(function (value) {
        console.log(value);
    }).catch(function (err) {
        console.log(err);
    });