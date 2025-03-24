let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let ottLinks = document.getElementById("ott-links");
let trailer = document.getElementById("trailer");
let interviews = document.getElementById("interviews");
let director = document.getElementById("director");



// Dark mode toggle functionality
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Switch to Light Mode';
    } else {
        modeToggle.textContent = 'Switch to Dark Mode';
    }
});

//function to fetch data from api

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    //if input field is empty

    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please enter a movie name </h3>`;
    }

    //if input isn't empty
    else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            //if movie exist in database
            if (data.Response == "True") {
                result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="lemon.jpeg" style="width: 1.2em; height: 1.2em;">
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                        </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${data.Actors}</p>
                    <h3>Reviews:</h3>
                    <ul>
                        <li><a href="https://www.imdb.com/title/${data.imdbID}/reviews" target="_blank">IMDb Reviews</a></li>
                        <li><a href="https://letterboxd.com/search/${data.Title}/" target="_blank">Letterboxd Reviews</a></li>
                    </ul>
                `;

                // Add director section
                director.innerHTML = `
                    <h3>Director:</h3>
                    <p>${data.Director}</p>
                `;

                // Add OTT platform links section
                ottLinks.innerHTML = `
                    <h3>Watch on:</h3>
                    <ul>
                        <li><a href="https://www.netflix.com/search?q=${data.Title}" target="_blank">Netflix</a></li>
                        <li><a href="https://www.amazon.com/s?k=${data.Title}" target="_blank">Amazon Prime</a></li>
                        <li><a href="https://www.hulu.com/search?q=${data.Title}" target="_blank">Hulu</a></li>
                    </ul>
                `;

                // Add trailer section
                trailer.innerHTML = `
                    <h3>Trailer:</h3>
                    <a href="https://www.youtube.com/results?search_query=${data.Title}+trailer" target="_blank">Watch Trailer</a>
                `;

                // Add interviews section
                interviews.innerHTML = `
                    <h3>Interviews:</h3>
                    <a href="https://www.youtube.com/results?search_query=${data.Title}+interview" target="_blank">Watch Interviews</a>
                `;
            }

            //if movie doesn't exist in database
            else {
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
                director.innerHTML = "";
                ottLinks.innerHTML = "";
                trailer.innerHTML = "";
                interviews.innerHTML = "";
            }
        })
            //if error occurs
            .catch(() => {
                result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
                director.innerHTML = "";
                ottLinks.innerHTML = "";
                trailer.innerHTML = "";
                interviews.innerHTML = "";
            });
    }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
