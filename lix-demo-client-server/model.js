const url = 'http://localhost:3000/api/v1/readability';
// The data we are going to send in our request
let data = {
    text: "This is a Test."
}
// Create our request constructor with all the parameters we need
var request = new Request(url, {
    method: 'POST',
     mode: 'no-cors',
    body: data
});


fetch(request)
//   'http://localhost:3000/api/v1/readability', {
// 	method: 'post',
//   mode: 'no-cors',
// 	body: JSON.stringify({
// 		text: document.getElementById('userText').value
// 	})
// })
.then(function() {
    // Your code for handling the data you get from the API
}).catch(function(err) {
	console.log('Fetch Error :-S', err);
});
