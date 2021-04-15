function addToWatched(id) {
	let watched= returnWatched();
	if (watched.includes(id)) {
		console.log("Already present");
	} else {
		watched.unshift(id);
		localStorage.setItem("watched", JSON.stringify(watched));
	}
}

function removeFromWatched(id) {
	let watched= returnWatched();
	if (watched.includes(id)) {
		watched = watched.filter((val) => val !== id);
		localStorage.setItem("watched", JSON.stringify(watched));
	} else {
		console.log("Element not present");
	}
}

function returnWatched(){
	const res = localStorage.getItem("watched");
	let watched = JSON.parse(res);
	if (watched === null || watched === undefined) {
		watched = [];
	}
	return watched;
}

function isPresentWatched(id){
	let watched = returnWatched();
	return watched.includes(id);
}

// addToWatched("tt1345836");
