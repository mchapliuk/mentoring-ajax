function getData() {
    const script = document.createElement('SCRIPT');
    script.src = '/jsonp_example?callback=parseData';
    document.getElementsByTagName('body')[0].appendChild(script);
}

function parseData(data) {
    console.log(JSON.stringify(data));
}