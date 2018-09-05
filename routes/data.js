let fs = require('fs');
let path = '.';

function pathConcat(pathname) {
	return path + '/' + pathname;
}

function filereader(fsRef, path) {
	return new Promise(function (resolve, reject) {
		fsRef.readFile(path, 'utf8', function (e, d) {
			if (e) reject(e);
			
			else resolve(JSON.parse(d));
		});
	});
}

function searchReq(req, res) {
	let path = pathConcat('api' + req.url + '/' + req.method.toLowerCase() + '.json');

	console.log(path);
	let servicePromise = filereader(fs, path)
	.then((response) =>{
		console.log(response);
		res.json(response);
	})
}

function mainReq(req, res) {
	// let path = pathConcat('api' + req.url + '/' + req.method.toLowerCase() + '.json');

	// console.log(path);
	// let servicePromise = filereader(fs, path)
	// .then((response) =>{
	// 	console.log(response);
	// 	res.json(response);
	// })	
}

module.exports = { searchReq, mainReq };