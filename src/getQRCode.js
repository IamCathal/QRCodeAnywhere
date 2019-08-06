let imgBox = document.getElementById('QRImage')

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    imgBox.src = `https://api.qrserver.com/v1/create-qr-code/?size=225x225&qzone=0&margin=0&data=${url}`
});

