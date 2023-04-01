
//getCurrentPosition(success, error, options)

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function getCurrentPosition(options) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);

    })
}

function doSomething(x, y) {
    console.log(x, y);
}

getCurrentPosition(options)
    .then((position) => {
        doSomething(position.coords.latitude, position.coords.langitude);
    })
    .catch((err) => {
        console.error(new Error(err.message));
    });