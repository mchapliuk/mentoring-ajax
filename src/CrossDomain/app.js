function tryGetDataFromAntoherDomain() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9999/hello1');
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.response);
        }
    };

    xhr.onloadend = function () {
        console.info('Request finished');
    };

    xhr.onerror = function () {
        console.error('No Cross Domain allowed!');
    };

    xhr.send();
}

function getDataFromAntoherDomain() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9999/hello2');
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.response);
        }
    };

    xhr.onloadend = function () {
        console.info('Request finished');
    };

    xhr.onerror = function () {
        console.error('No Cross Domain allowed!');
    };

    xhr.send();
}
