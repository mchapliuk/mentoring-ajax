function fetchData() {
    const request = new Request('/fetch_example', {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'text/plain'
        })
    });

    fetch(request).then(response => {
        response
            .text()
            .then(text => {
                console.log(text);
            })
    });
}