function addToWatchlist(id) {
	let watchlist=returnWatchList();
	if (watchlist.includes(id)) {
		console.log("Already present");
	} else {
		watchlist.unshift(id);
		localStorage.setItem("watchlist", JSON.stringify(watchlist));
	}
}

function removeFromWatchlist(id) {
	let watchlist=returnWatchList();
	if (watchlist.includes(id)) {
		watchlist = watchlist.filter((val) => val !== id);
		localStorage.setItem("watchlist", JSON.stringify(watchlist));
	} else {
		console.log("Element not present");
	}
}

function isPresentWatchlist(id){
	const res = localStorage.getItem("watchlist");
	let watchlist = JSON.parse(res);
	if (watchlist === null || watchlist === undefined) {
		watchlist = [];
	}
	return watchlist.includes(id);
}

function returnWatchList(){
	const res = localStorage.getItem("watchlist");
	let watchlist = JSON.parse(res);
	if (watchlist === null || watchlist === undefined) {
		watchlist = [];
	}
	return watchlist;
}

// addToWatchlist("tt1345836");