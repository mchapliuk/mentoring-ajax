let request = function (httpConfig) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(httpConfig.method || 'GET', httpConfig.url);
        if (httpConfig.headers) {
            Object.keys(httpConfig.headers).forEach(key => {
                xhr.setRequestHeader(key, httpConfig.headers[key]);
            });
        }

        xhr.onload = function () {
            xhr.status >= 200 && xhr.status < 300
                ? resolve(xhr.response)
                : reject(xhr.statusText);
        };
        xhr.onerror = function () { reject(xhr.statusText); };
        xhr.send(httpConfig.body);
    });
};

function getData() {
    request({
        url: '/promise_example'
    })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        })
}
