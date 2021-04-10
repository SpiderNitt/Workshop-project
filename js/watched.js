function addToWatched(id) {
	const res = localStorage.getItem("watched");
	let watched = JSON.parse(res);
	if (watched === null || watched === undefined) {
		watched = [];
	}
	if (watched.includes(id)) {
		console.log("Already present");
	} else {
		watched.unshift(id);
		localStorage.setItem("watched", JSON.stringify(watched));
	}
}

function removeFromWatched(id) {
	const res = localStorage.getItem("watched");
	let watched = JSON.parse(res);
	if (watched === null || watched === undefined) {
		watched = [];
	}
	if (watched.includes(id)) {
		watched = watched.filter((val) => val !== id);
		localStorage.setItem("watched", JSON.stringify(watched));
	} else {
		console.log("Element not present");
	}
}

async function displayWatched() {
	const res = localStorage.getItem("watched");
	let watched = JSON.parse(res);
	if (watched === null || watched === undefined) {
		watched = [];
	}
	const watched_movies = document.getElementById("watched_movies");
	watched_movies.innerHTML = "";
	if (watched.length === 0) {
        console.log("Watched is Empty");
		watched_movies.innerHTML += `
            <div class="alert alert-primary movie-watched_already">
                Your completed movies list is empty
            </div>
        `;
	} else {
		watched.forEach((element) => {
			fetch(`http://www.omdbapi.com/?apikey=e94d2f36&i=${element}`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					watched_movies.innerHTML += `
                        <div class="alert alert-primary movie-watched_already">
                            ${data.Title}
                            <div class="btn btn-primary">View More</div>
                        </div>
                    `;
				});
		});
	}
}

displayWatched();
