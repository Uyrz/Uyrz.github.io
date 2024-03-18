const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
  .then(FingerprintJS => FingerprintJS.load())

fpPromise
  .then(fp => fp.get())
  .then(result => {

    const visitorId = result.visitorId;


    const displayElement = document.getElementById('visitorIdDisplay');
    if (displayElement) {
      displayElement.innerText = 'Device ID: ' + visitorId;

      fetch('Id.txt')
        .then(response => response.text())
        .then(fileContent => {
          if (fileContent.includes(visitorId)) {
            window.location.href = 'TH.html';
          }
        })
        .catch(error => console.error('Error fetching fileId.txt:', error));
    } else {
      console.error('Element with id "visitorIdDisplay" not found.');
    }
  });