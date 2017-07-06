var myReadability = document.getElementById("readabilityOutput")
const url = 'http://localhost:3000/api/v1/readability';

function executeFetch(){
  fetch(url, {
	method: 'post',
  headers: {
    'Content-Type': 'text/plain',
    'Content-Type': 'application/json'
  },
	body: JSON.stringify({
		text: document.getElementById('userText').value
	})
})
.then(function(res) {
    // Your code for handling the data you get from the API
  console.log(res.ok);
  console.log(res.status);
  console.log(res.statusText);
  // console.log(res.text());
  console.log(res.headers.get('content-type'));
  return res.text().then(function(text) {
      myReadability.innerHTML = text;
    });
}).catch(function(err) {
	console.log('Fetch Error :-S', err);
});
};
