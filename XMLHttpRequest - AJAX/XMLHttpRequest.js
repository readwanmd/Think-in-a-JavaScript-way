const getButton = document.getElementById('get-btn');
const sendButton = document.getElementById('send-btn');

const sendRequest = function (method, url, data) {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.responseType = 'json';
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(data);

		xhr.onload = function () {
			if (xhr.status > 400) {
				reject(`Errror code: ${xhr.status}`);
			} else {
				resolve(xhr.response);
			}
		};
		xhr.onerror = function () {
			reject('Something Wrong! (Networrk)');
		};
	});
	return promise;
};

const getData = function () {
	sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1')
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
};

const sendData = function () {
	sendRequest(
		'POST',
		'https://jsonplaceholder.typicode.com/posts',
		JSON.stringify({
			title: 'sssssssss',
			body: 'fdsssaff',
			userId: 1,
		})
	)
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
};

getButton.addEventListener('click', getData);
sendButton.addEventListener('click', sendData);
