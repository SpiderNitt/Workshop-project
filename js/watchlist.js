function addToWatchlist(id) {
	const res = localStorage.getItem("watchlist");
	let watchlist = JSON.parse(res);
	if (watchlist === null || watchlist === undefined) {
		watchlist = [];
	}
	if (watchlist.includes(id)) {
		console.log("Already present");
	} else {
		watchlist.unshift(id);
		localStorage.setItem("watchlist", JSON.stringify(watchlist));
	}
}

function removeFromWatchlist(id) {
	const res = localStorage.getItem("watchlist");
	let watchlist = JSON.parse(res);
	if (watchlist === null || watchlist === undefined) {
		watchlist = [];
	}
	if (watchlist.includes(id)) {
		watchlist = watchlist.filter((val) => val !== id);
		localStorage.setItem("watchlist", JSON.stringify(watchlist));
	} else {
		console.log("Element not present");
	}
}

async function displayWatchlist() {
	const res = localStorage.getItem("watchlist");
	let watchlist = JSON.parse(res);
	if (watchlist === null || watchlist === undefined) {
		watchlist = [];
	}
	const watchlist_movies = document.getElementById("watchlist");
	watchlist_movies.innerHTML = "";
	if (watchlist.length === 0) {
        console.log("watchlist is Empty");
		watchlist_movies.innerHTML += `
            <div class="alert alert-info movie-name">
                Your watchlist is empty
            </div>
        `;
	} else {
        console.log(watchlist);
		watchlist.forEach((element) => {
			fetch(`http://www.omdbapi.com/?apikey=e94d2f36&i=${element}`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					watchlist_movies.innerHTML += `
                    <div class="alert alert-info movie-name">
                        ${data.Title}
                        <div class="btn btn-primary">View More</div>
                    </div>
                    `;
				});
		});
	}
}

displayWatchlist();