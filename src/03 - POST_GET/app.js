const elOutput = document.getElementById('output');
const elCustomer = document.getElementById('customer');
const elCity = document.getElementById('city');

function getCustomers() {

    elOutput.value = '';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/customers');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();

    xhr.onload = function () {
        elOutput.value = xhr.response;
    };
}

function addCustomer() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/customers');
    xhr.setRequestHeader('Content-tYpE', 'application/json');
    xhr.timeout = 2000;
    xhr.send(JSON.stringify({
        company: elCustomer.value,
        city: elCity.value
    }));

    xhr.ontimeout = function() {
        elOutput.value = 'Time is out';
    };

    xhr.onload = function () {
        elOutput.value = xhr.response;
    }
}

