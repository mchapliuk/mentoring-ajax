/**
 * @file An Intro to XHR
 * @author Maksym Chapliuk
 */

function getDemo(isOk = true) {

    const URL = isOk ? '/get_demo' : '/get_demo_fail';

    /**
     * Create an instance of XHR
     * @type {XMLHttpRequest}
     */
    const xhr = new XMLHttpRequest();

    /**
     * 'Open' doesn't open a connection. It is used for configuring the XHR
     */
    xhr.open('GET', URL);

    /**
     * 'setRequestHeader' configures request headers according to the sending data
     * in the example we use 'Accept' - that tells server we want to receive JSON data
     */
    xhr.setRequestHeader('Accept', 'application/json');

    /**
     * 'Send' opens a connection and sends data to the server
     */
    xhr.send(null); // or xhr.send()

    /**
     * parse response
     */
    xhr.onreadystatechange = function() {
        console.info('Requst\'s state is %s', xhr.readyState);
        if (xhr.readyState === XMLHttpRequest.DONE) { // the same as xhr.readyState === 4
            console.log('Response status: %s, %s', xhr.status, xhr.statusText);
            if (xhr.status === 200) {
                // if request OK
                console.info(JSON.parse(xhr.responseText).message);
            } else {
                // when 404
                document.open();
                document.write(xhr.responseText);
                document.close();
            }
        }
    };

    // Async
    console.log('This will be shown BEFORE response, because the script still working');
}

function getDemoSync() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/get_demo', false); // 3rd parameter means (A)SYNC
    xhr.send();

    if (xhr.status === 200) {
        console.info(JSON.parse(xhr.responseText).message);
    }

    // Async
    console.log('This will be shown AFTER response, because the script is waiting for the response');
}
