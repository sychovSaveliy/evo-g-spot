

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

function searchRes(req, res) {
	let path = pathConcat('api' + req.url + '/' + req.method.toLowerCase() + '.json'),
	servicePromise = filereader(fs, path);
	
	servicePromise
	.then((response) => {
		res.json(response);
	});
}

function searchReq(req, res) {
	let searchKey = req.body;
	
	searchParam = searchPreparation(searchKey);
	
	let servicePromise = filereader(fs, './api/search/get.json')
	.then((response) =>{
		
		response.requestList.forEach(item => {
			item.searchIndex = getMatches(searchParam, item.name);
			console.log(item.name + ' ' + item.searchIndex);
		});
		
	})
	.then((response) =>{
		console.log(response);
		res.json(response);
	})
	
}

function getMatches(searchTarget, searchSource, searchRating){
	var searchSource = searchPreparation(searchSource),
	searchRating = 0;
	searchTarget.forEach(targetItem =>{
		searchSource.forEach(sourceItem =>{

			for(let i = 0; i < targetItem.length; i++){
				for(let k = 0; k < targetItem.length; k++){

					if(targetItem[i] === sourceItem[k]){
						searchRating++
					} else {
						continue;
					}

				}
				console.log(searchRating);
				if(targetItem[i] == targetItem[targetItem.length-1] && searchRating < 3){
					searchRating = 0;
					console.log(searchRating)
				}
			}

		})
	})
	return searchRating
}

function searchPreparation(param){
	let res = null;
	if(typeof(param) == "string"){
		res = param.split(' ');
	} else {
		for(let item in param){
			res = param[item].split(' ');
		}
	}
	return res;
}

module.exports = { searchRes, searchReq };