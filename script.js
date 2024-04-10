/* DATA AND CONSTRUCTORS */

class User {
    constructor(name, userID) {
        this.name = name
        this.userID = userID
        this.movies = []
    }
}

class Movie {
    constructor(name, genres, year, director, favActors, userRating, rtScores, review, poster, dateAdded) {
        this.name = name
        this.genres = genres
        this.year = year
        this.director = director
        this.favActors = favActors
        this.userRating = userRating
        this.rtScores = rtScores
        this.userVsRt = setUserVsRt(userRating, rtScores)
        this.review = review
        this.poster = poster
        this.dateAdded = dateAdded
    }
}

// object array containing all user data
var users = [
    {
        "name": "Sedrick Moore II",
        "userID": "01",
        // a second object array that conatains user movie data
        "movies": [
            {
                "name": "Dune: Part Two",
                "genres": ["Sci-fi", "Adventure", "Action", "Space Epic"],
                "year": 2024,
                "director": "Denis Villeneuve",
                "favActors": ["Timothee Chalamet", "Zendaya", "Javier Bardem"],
                "userRating": 9,
                "rtScores": [93, 95],
                "userVsRt": "",     // uses a function defined below to compare user rating and Rotten Tomatoes scores
                "review": "Thrilling. Starts off a little slow, but get interesting quickly. Reaches a high peak and perfectly sets up the next movie. Javier Bardem was hilarious.",
                "poster": "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_.jpg",
                "dateAdded": "4/5/2024, 12:45:12 PM"

            },
            {
                "name": "The Color Purple",
                "genres": ["Drama", "Coming of Age", "Period"],
                "year": 1985,
                "director": "Steven Spielberg",
                "favActors": ["Whoopi Goldberg", "Danny Glover", "Oprah Winfrey"],
                "userRating": 8.5,
                "rtScores": [73, 94],
                "userVsRt": "",
                "review": "Thoughtful, at times hard to watch, but honestly much funnier than one would expect. Great acting from the entire cast and amazing character development.",
                "poster": "https://m.media-amazon.com/images/M/MV5BZDRkOWQ5NGUtYTVmOS00ZjNhLWEwODgtOGI2MmUxNTBkMjU0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_.jpg",
                "dateAdded": "4/5/2024, 12:50:00 PM"

            },
            {
                "name": "Rustin",
                "genres": ["Drama", "Biopic", "Period"],
                "year": 2023,
                "director": "Geroge C. Wolfe",
                "favActors": ["Colman Domingo"],
                "userRating": 6,
                "rtScores": [84, 83],
                "userVsRt": "",
                "review": "Not one of my favorites. Colman is elite, but without the context of how Rustin was in real life, I felt myself questioning if his portrayal was believable.",
                "poster": "https://m.media-amazon.com/images/M/MV5BZDc2MDIzYzAtOWUzZS00ZjJmLWE4ZGMtMWZlNDc2OTQ5NzFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_.jpg",
                "dateAdded": "4/5/2024, 1:14:42 PM"
            },
            {
                "name": "Past Lives",
                "genres": ["Drama", "Romance", "Non-English", "Korean"],
                "year": 2023,
                "director": "Celine Song",
                "favActors": ["Greta Lee", "Teo Yoo"],
                "userRating": 7,
                "rtScores": [95, 84],
                "userVsRt": "",
                "review": "A movie that I would classify as 'perfectly fine'. It did everything 'good enough', but nothing spectacular. I will say, it did make for good conversation afterwards.",
                "poster": "https://m.media-amazon.com/images/M/MV5BOTkzYmMxNTItZDAxNC00NGM0LWIyODMtMWYzMzRkMjIyMTE1XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_FMjpg_.jpg",
                "dateAdded": "4/5/2024, 1:25:10 PM"
            },
            {
                "name": "Poor Things",
                "genres": ["Comedy", "Sci-fi", "Dark Comedy", "Steampunk", "Period"],
                "year": 2023,
                "director": "Yorgos Lanthimos",
                "favActors": ["Emma Stone", "Willem Dafoe", "Mark Ruffalo"],
                "userRating": 9,
                "rtScores": [92, 79],
                "userVsRt": "",
                "review": "Absolutely visually beautiful and overall amazing film. Confusing in it's initial stages, but once it gets going, it becomes hilarious, poignant, and a masterclass of acting from a wonderful cast, led strongly by Emma Stone.",
                "poster": "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_.jpg",
                "dateAdded": "4/5/2024, 1:33:23 PM"

            },
            {
                "name": "The Zone Of Interest",
                "genres": ["Drama", "War", "World War II", "Historical", "Non-English"],
                "year": 2023,
                "director": "Jonathan Glazer",
                "favActors": ["Sandra Hüller"],
                "userRating": 5,
                "rtScores": [93, 78],
                "userVsRt": "",
                "review": "Not my favorite film. Visually beautifl, impeccable sound, and a much needed topic of discussion. However, it was slow, drawn out, and just didn't hold my attention often enough.",
                "poster": "https://m.media-amazon.com/images/M/MV5BYzRmOGQwZjktYjM2Ni00M2NmLWFlZDYtZGFhM2RkM2VhZDI1XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_FMjpg_UX1000_.jpg",
                "dateAdded": "4/5/2024, 2:15:00 PM"

            },
            {
                "name": "Society of the Snow",
                "genres": ["Thriller", "Drama", "Historical", "Non-English", "Disaster"],
                "year": 2023,
                "director": "J. A. Bayona",
                "favActors": [],
                "userRating": 8,
                "rtScores": [90, 88],
                "userVsRt": "",
                "review": "An interesting film that questions the morality of the lengths people will go for survival. Truly poignant and the ensemble sold the movie very well.",
                "poster": "https://m.media-amazon.com/images/M/MV5BYmI4MTllYTItMjllYi00ZTY2LWE0NmQtNjBmZWQ2ZmE4NjQ2XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg",
                "dateAdded": "4/5/2024, 2:30:44 PM"

            },
            {
                "name": "American Fiction",
                "genres": ["Comedy", "Drama", "Black Comdey"],
                "year": 2023,
                "director": "Cord Jefferson",
                "favActors": ["Jeffrey Wright", "Sterling K. Brown", "Erika Alexander"],
                "userRating": 8,
                "rtScores": [93, 96],
                "userVsRt": "",
                "review": "A profound fillm that questioned how America consumes it's literature from black authors (and by proxy, black art in general). A stellar cast and enough comedy and heartbreak to make for a compelling film.",
                "poster": "https://m.media-amazon.com/images/M/MV5BZDlkZmRlYTctNGJmNy00MjVkLThjZDQtMWY5Zjg2NjlhZDZkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
                "dateAdded": "4/5/2024, 2:33:23 PM"

            },
            {
                "name": "A Quiet Place Part II",
                "genres": ["Horror", "Post-Apocalyptic", "Sci-fi", "Thriller"],
                "year": 2020,
                "director": "John Krasinski",
                "favActors": ["Emily Blunt", "Millicent Simmonds"],
                "userRating": 7,
                "rtScores": [91, 92],
                "userVsRt": "",
                "review": "Defintely not as thrilling as the first, but a solid sequel. It succesfully continued the silence trope that the first film introduced while not relying on it as heavily.",
                "poster": "https://m.media-amazon.com/images/M/MV5BMTE2ODU4NDEtNmRjNS00OTk1LTg4NmMtNTAzYzVlNzJmYjgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
                "dateAdded": "4/5/2024, 3:24:43 PM"

            },
            {
                "name": "Anatomy of a Fall",
                "genres": ["Drama", "Mystery", "Thriller", "Legal", "Non-English"],
                "year": 2023,
                "director": "Justine Triet",
                "favActors": ["Sandra Hüller", "Milo Machado-Graner", "Antoine Reinartz"],
                "userRating": 9,
                "rtScores": [96, 90],
                "userVsRt": "",
                "review": "An thrilling masterclass of writing and direction, the film had me on the edge of my seat consistently. Sandra Hüller was phenominal in her role as well.",
                "poster": "https://m.media-amazon.com/images/M/MV5BMDBiYmRkNjUtYzc4My00NGFiLWE2NWUtMGU1ZDA1NTQ3ZjQwXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_FMjpg_UX1000_.jpg",
                "dateAdded": "4/5/2024, 3:30:36 PM"

            },
            {
                "name": "Killers of the Flower Moon",
                "genres": ["Drama", "Historical", "Western", "Crime", "Epic"],
                "year": 2023,
                "director": "Martin Scorsese",
                "favActors": ["Robert De Niro", "Lily Gladstone"],
                "userRating": 6,
                "rtScores": [93, 84],
                "userVsRt": "",
                "review": "A slightly dissapointing movie coming from a Scorsese fan. Too long, too much going on, not enough emphasis on the Osage perspective.",
                "poster": "https://m.media-amazon.com/images/M/MV5BMTdiOTg2YmQtZTdjNi00NGJjLWI2ZTQtYWNkNDUwMDEzOTQxXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_FMjpg_UX1000_.jpg",
                "dateAdded": "4/5/2024, 3:37:23 PM"

            },
            {
                "name": "Maestro",
                "genres": ["Drama", "Romance", "Musical", "Biographical", "Historical"],
                "year": 2023,
                "director": "Bradley Cooper",
                "favActors": ["Bradley Cooper", "Carey Mulligan"],
                "userRating": 8.5,
                "rtScores": [79, 57],
                "userVsRt": "",
                "review": "Apparently a polarizing film, Bradley Cooper performs in what might be his best role, in my opnion. The film rides heavily on his performance, to the point where I forgot I was watching him act.",
                "poster": "https://m.media-amazon.com/images/M/MV5BOGI2MzQ1NzQtMmVkOC00ZGI0LWI3YjQtN2FjMzQ1NmRhNzFhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
                "dateAdded": "4/5/2024, 3:45:17 PM"

            },
            {
                "name": "The Holdovers",
                "genres": ["Comedy", "Drama", "Holiday", "Christmas", "Period"],
                "year": 2023,
                "director": "Alexander Payne",
                "favActors": ["Paul Giamatti", "Da'Vine Joy Randolph", "Dominic Sessa"],
                "userRating": 9,
                "rtScores": [97, 92],
                "userVsRt": "",
                "review": "A heartwarming, timeless story that simply made me feel good and appreciate the holidays. Beautifully shot and absolutely astounding acting from the main cast.",
                "poster": "https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
                "dateAdded": "4/5/2024, 3:51:22 PM"

            },
            {
                "name": "The Killer",
                "genres": ["Drama", "Thriller", "Crime", "Mystery", "Action"],
                "year": 2023,
                "director": "David Fincher",
                "favActors": ["Michael Fassbender"],
                "userRating": 6.5,
                "rtScores": [85, 61],
                "userVsRt": "",
                "review": "This movie was fine. Nothing too spectacular about it. Just an easy plot to follow, and some action. Michael Fassbender defintely played the role well. Not one of Fincher's best, but not bad.",
                "poster": "https://m.media-amazon.com/images/M/MV5BZGJkMDUwZWQtYTMzMS00NTg5LWE1ZTYtOTVhMDI4NGI1YjMyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
                "dateAdded": "4/5/2024, 4:00:56 PM"

            },
            {
                "name": "Lamb",
                "genres": ["Horror", "Folk Horror", "Fantasy", "Non-English"],
                "year": 2021,
                "director": "Valdimar Jóhannsson",
                "favActors": ["Noomi Rapace"],
                "userRating": 7,
                "rtScores": [86, 61],
                "userVsRt": "",
                "review": "A solid effort again from A24. They definitely have an eye for horror, and though Lamb isn't the best they've done, it continues a streak of weird, unique films brought to the mainstream. The lamb was oddly cute, too.",
                "poster": "https://m.media-amazon.com/images/M/MV5BNzYzZTI2YmQtYmZlOS00NDI0LTg5MTktODJkNzc2Yzg0ZmMxXkEyXkFqcGdeQXVyNTQwOTY1MTg@._V1_FMjpg_UX1000_.jpg",
                "dateAdded": "4/5/2024, 4:07:13 PM"

            },
        ]
    },
]


/* GLOBAL VARIABLES */

var listLength = users[0].movies.length
var filteredMovies = users[0].movies
var isFilteringRating = false
var isFilteringGenre = false
var searchType = "titles"
var searchResults
var isSearching = false


/* DATA MANIPULATION FUNCTIONS */

// function that returns the difference between user score and Rotten Tomatoes scores
function getRtDiffs(userRating, rtScores) {
    const userPercent = userRating * 10
    const criticDiff = userPercent - rtScores[0]
    const audienceDiff = userPercent - rtScores[1]

    return [userPercent, criticDiff, audienceDiff]
}
// function that returns a string used for user rating and Rotten Tomatoes comparison
function setUserVsRt(userRating, rtScores) {
    if ((rtScores[0] === null && rtScores[1] === null) || (rtScores[0] === undefined && rtScores[1] === undefined)) {
        return "Rotten Tomatoes scores not set."
    }


    const userPercent = getRtDiffs(userRating, rtScores)[0]
    const criticDiff = Math.abs(getRtDiffs(userRating, rtScores)[1])
    const audienceDiff = Math.abs(getRtDiffs(userRating, rtScores)[2])
    const direction = userPercent > rtScores[0] ? 'above' : 'below'

    if (criticDiff === 0 && audienceDiff === 0) {
        return "You matched both Rotten Tomatoes scores!"
    } else if (criticDiff === 0) {
        if (rtScores[1] === null || rtScores[1] === undefined) {
            return `You matched the critic score (${rtScores[0]}), but the audience score was not set.`
        } else {
            return `You matched the critic score (${rtScores[0]}), but were ${audienceDiff} points ${direction} the audience score (${rtScores[1]}).`
        }
    } else if (audienceDiff === 0) {
        if (rtScores[0] === null || rtScores[0] === undefined) {
            return `You matched the audience score (${rtScores[1]}), but the critic score was not set.`
        } else {
            return `You matched the audience score (${rtScores[1]}), but were ${criticDiff} points ${direction} the critic score (${rtScores[0]}).`
        }
    } else {
        const overallDirection = userPercent > (rtScores[0] + rtScores[1]) / 2 ? 'above' : 'below'
        if (rtScores[1] === null || rtScores[1] === undefined) {
            return `You were ${criticDiff} points ${direction} the critic score (${rtScores[0]}), but the audience score was not set.`
        } else if (rtScores[0] === null || rtScores[0] === undefined) {
            return `You were ${audienceDiff} points ${overallDirection} the audience score (${rtScores[1]}), but the critic score was not set.`
        } else {
            return `You were ${criticDiff} points ${direction} the critic score (${rtScores[0]}) and ${audienceDiff} points ${overallDirection} the audience score (${rtScores[1]}).`
        }
    }
}
// loops through each movie and adds the user and rotten tomatoes comparisions to the variable. if not given an arguement it will do this for every user
function updateUserVsRt(userId = null) {
    if (userId) {
        // update userVsRt for a specific user
        const userIndex = users.findIndex(user => user.userID === userId)
        if (userIndex !== -1) {
            users[userIndex].movies.forEach(movie => {
                movie.userVsRt = setUserVsRt(movie.userRating, movie.rtScores)
            })
        } else {
            console.error(`User with ID ${userId} not found`)
        }
    } else {
        // update userVsRt for all users (default behavior)
        users.forEach(user => {
            user.movies.forEach(movie => {
                movie.userVsRt = setUserVsRt(movie.userRating, movie.rtScores)
            })
        })
    }
}
function updateMovieCount(count) {
    document.getElementById('movieCount').textContent = count
}
function createMovieReviewBox(movieObject) {
    const title = movieObject.name
    const genres = movieObject.genres
    const year = movieObject.year
    const director = movieObject.director
    const actors = movieObject.favActors
    const userRating = movieObject.userRating
    const review = movieObject.review
    const userVsRt = movieObject.userVsRt
    const poster = movieObject.poster

    const movieBox = `
    <div class="movie-box">
        <h1>${title} (${year})</h1>
        <img src="${poster || 'Images/default.jpg'}" alt="${title} movie poster">
        <h3>${genres}</h3>
        <p><b>Director:</b> ${director}</p>
        <p><b>Your Favorite Actors:</b> ${actors}</p>
        <div class="rating"><p><b>Your Rating:</b> ${userRating} stars</p></div>
        <p><b>Rotten Tomatoes:</b> ${userVsRt}</p>
        <div class="review"><p><b>Your Review:</b> ${review}</p></div>
        <div class="button-container">
            <button id="updateButton" onclick="updateBtn('${title}','${year}'),hideSortDropdown()
            hideFilterDropdown()
            hideFilterRatingDropdown()">Update</button>&nbsp
            <button id="removeButton" onclick="removeBtn('${title}','${year}'),hideSortDropdown()
            hideFilterDropdown()
            hideFilterRatingDropdown()">Remove</button>&nbsp
        </div>
    </div>
    `

    return movieBox
}
function displayMovieReviews(users) {
    let movieReviewHTML = ""

    users.forEach(user => {
        user.movies.forEach(movie => {
            movieReviewHTML += createMovieReviewBox(movie)
        })
    })

    const mainDiv = document.getElementById("main")
    mainDiv.innerHTML = movieReviewHTML  // update content of main

    updateMovieCount(users[0].movies.length)  // update movie count based on the first user's movies
}
function filterMovies(type, value, compare) {
    let moviesToFilter = isSearching ? searchResults : users[0].movies;
    switch (type) {
        case "userRating":
            switch (compare) {
                case "equal":
                    moviesToFilter = moviesToFilter.filter(movie => movie.userRating === value);
                    break;
                case "below":
                    moviesToFilter = moviesToFilter.filter(movie => movie.userRating < value);
                    break;
                case "above":
                    moviesToFilter = moviesToFilter.filter(movie => movie.userRating > value);
                    break;
                default:
                    console.error("Unknown comparison type: ", compare);
                    break;
            }
            break;
        case "genres":
            moviesToFilter = moviesToFilter.filter(movie =>
                value.every(val => movie.genres.some(genre => genre.toLowerCase() === val.toLowerCase()))
            );
            break;
        case "clear":
            moviesToFilter = users[0].movies; // reset to the original array
            break;
        default:
            console.error("Unknown filter type: ", type);
            break;
    }

    if (isSearching) {
        searchResults = moviesToFilter;
    } else {
        filteredMovies = moviesToFilter;
    }

    displayFilteredMovies(moviesToFilter);
}
function displayFilteredMovies(list) {
    let movieReviewHTML = ""

    if (!list || list.length === 0) {
        alert("No movies found.")
        return
    }

    for (let i = 0; i < list.length; i++) {
        movieReviewHTML += createMovieReviewBox(list[i])

    }

    updateMovieCount(list.length)

    const mainDiv = document.getElementById("main")
    mainDiv.innerHTML = movieReviewHTML  // update content of main
}
function removeMovie(userID, movieName, year) {
    const user = users.find(user => user.userID === userID)
    if (!user) return

    const movieIndex = user.movies.findIndex(movie => movie.name === movieName && movie.year === year)

    if (movieIndex !== -1) {
        user.movies.splice(movieIndex, 1)
    }
}
function addMovie() {
    // get movie details from modal inputs
    const movieName = document.getElementById('movieName').value
    let genres = document.getElementById('genres').value
    const year = parseInt(document.getElementById('year').value)
    const director = document.getElementById('director').value
    let favActors = document.getElementById('favActors').value
    const userRating = parseFloat(document.getElementById('userRating').value)
    let criticScore = document.getElementById('criticScore').value
    let audienceScore = document.getElementById('audScore').value
    let review = document.getElementById('review').value
    let poster = document.getElementById('poster').value
    const currentDate = new Date() // get current date and time
    const timestamp = currentDate.toLocaleString()
    let rtScores

    if (users[0].movies.find(movie => movie.name === movieName && movie.year === year)) {
        alert("Movie already exists")
        return
    }

    // name validation
    if (movieName === '') {
        alert("Please enter a movie name.")
        return
    }

    // genre validation
    const genreList = genres.split(/,\s*|\s*,\s*/)
    if (genreList.length > 5 || !genres.trim()) {
        alert("Please enter up to 5 genres (comma-separated).")
        return
    }

    // year validation
    const currentYear = new Date().getFullYear() // get the current year
    if (isNaN(year) || year < 1888 || year > currentYear) {
        alert("Invalid year. Please enter a valid year (YYYY).")
        return
    }

    // director validation
    if (!director.trim()) {
        alert("Please enter a director name.")
        return
    }

    // actors validation
    if (!favActors.trim()) {
        favActors = ["No actors selected."]
    } else {
        const actorList = favActors.split(/\s*,\s*/) // split the input by comma, allowing spaces around the comma
        if (actorList.length > 3) {
            alert("Please enter up to 3 actors (comma-separated).")
            return
        }
    }

    // rating validation
    if (isNaN(userRating) || userRating < 0 || userRating > 10) {
        alert("Invalid rating. Please enter a number between 0 and 10.")
        return
    }

    // critic score validation
    if (!criticScore.trim()) {
        criticScore = null
    } else if (isNaN(criticScore) || criticScore < 0 || criticScore > 100) {
        alert("Enter a valid number for the Rotten Tomatoes critic score (0-100) or leave blank to skip.")
        return
    }

    // cudience score validation
    if (!audienceScore.trim()) {
        audienceScore = null
    } else if (isNaN(audienceScore) || audienceScore < 0 || audienceScore > 100) {
        alert("Enter a valid number for the Rotten Tomatoes audience score (0-100) or leave blank to skip.")
        return
    }

    rtScores = [criticScore, audienceScore]

    // review validation
    if (review.length > 250) {
        alert("Review is too long! Please limit your review to 250 characters.")
        return
    } else if (!review.trim()) {
        review = "No written review."
    }

    // poster url validation
    const imageURLRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%_\+.~#?&\/=]+(\.(jpg|jpeg|png|gif|svg))$/
    if (poster.trim() === "") {
        poster = "Images/default.jpg"
    }
    if (!imageURLRegex.test(poster)) {
        alert("Invalid image URL. Please enter a valid URL ending in .jpg, .jpeg, .png, .gif, or .svg.")
        return
    }


    // create new movie object
    const newMovie = {
        name: movieName,
        genres: genres,
        year: year,
        director: director,
        favActors: favActors,
        userRating: userRating,
        rtScores: rtScores,
        review: review,
        userVsRt: "",
        poster: poster,
        dateAdded: timestamp
    }

    // add movie to users array
    users[0].movies.push(newMovie)
    updateUserVsRt()
    alert(`${newMovie.name} added!`)


    displayMovieReviews(users)

    closeModal()
}
function updateMovie(movieIndex) {
    // get updated movie details from modal inputs
    const movieName = document.getElementById('movieName').value
    let genres = document.getElementById('genres').value
    const year = parseInt(document.getElementById('year').value)
    const director = document.getElementById('director').value
    let favActors = document.getElementById('favActors').value
    const userRating = parseFloat(document.getElementById('userRating').value)
    let criticScore = document.getElementById('criticScore').value
    let audienceScore = document.getElementById('audScore').value
    let review = document.getElementById('review').value
    let poster = document.getElementById('poster').value

    if (!users[0].movies.find(movie => movie.name === movieName && movie.year === year)) {
        alert("Movie doesn't exist")
        return
    }

    // name validation
    if (movieName === '') {
        alert("Please enter a movie name.")
        return
    }

    // genre validation
    const genreList = genres.split(/,\s*|\s*,\s*/)
    if (genreList.length > 5 || !genres.trim()) {
        alert("Please enter up to 5 genres (comma-separated).")
        return
    }

    // year validation
    const currentYear = new Date().getFullYear()
    if (isNaN(year) || year < 1888 || year > currentYear) {
        alert("Invalid year. Please enter a valid year (YYYY).")
        return
    }

    // director validation
    if (!director.trim()) {
        alert("Please enter a director name.")
        return
    }

    // actors validation
    if (!favActors.trim()) {
        favActors = ["No actors selected."]
    } else {
        const actorList = favActors.split(/\s*,\s*/)
        if (actorList.length > 3) {
            alert("Please enter up to 3 actors (comma-separated).")
            return
        }
    }

    // rating validation
    if (isNaN(userRating) || userRating < 0 || userRating > 10) {
        alert("Invalid rating. Please enter a number between 0 and 10.")
        return
    }

    // critic score validation
    if (!criticScore.trim()) {
        criticScore = null
    } else if (isNaN(criticScore) || criticScore < 0 || criticScore > 100) {
        alert("Enter a valid number for the Rotten Tomatoes critic score (0-100) or leave blank to skip.")
        return
    }

    // audience score validation
    if (!audienceScore.trim()) {
        audienceScore = null
    } else if (isNaN(audienceScore) || audienceScore < 0 || audienceScore > 100) {
        alert("Enter a valid number for the Rotten Tomatoes audience score (0-100) or leave blank to skip.")
        return
    }

    rtScores = [criticScore, audienceScore]

    // review validation
    if (review.length > 250) {
        alert("Review is too long! Please limit your review to 250 characters.")
        return
    } else if (!review.trim()) {
        review = "No written review."
    }

    // poster url validation
    const imageURLRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%_\+.~#?&\/=]+(\.(jpg|jpeg|png|gif|svg))$/
    if (poster.trim() === "") {
        poster = "Images/default.jpg"
    }
    if (!imageURLRegex.test(poster)) {
        alert("Invalid image URL. Please enter a valid URL ending in .jpg, .jpeg, .png, .gif, or .svg.")
        return
    }

    // update movie in users array
    users[0].movies[movieIndex] = {
        name: movieName,
        genres: genres,
        year: year,
        director: director,
        favActors: favActors,
        userRating: userRating,
        rtScores: [criticScore, audienceScore],
        review: review,
        userVsRt: "",
        poster: poster,
        dateAdded: users[0].movies[movieIndex].dateAdded
    }


    updateUserVsRt()
    displayMovieReviews(users)
    alert(`${movieName} updated!`)

    closeModal()

}
function clearForm() {
    document.getElementById('movieName').value = ''
    document.getElementById('genres').value = ''
    document.getElementById('year').value = ''
    document.getElementById('director').value = ''
    document.getElementById('favActors').value = ''
    document.getElementById('userRating').value = ''
    document.getElementById('criticScore').value = ''
    document.getElementById('audScore').value = ''
    document.getElementById('review').value = ''
    document.getElementById('poster').value = ''
}
function clearSearch() {
    document.getElementById('searchBox').value = ''
}

// called seperately to make sure the Rotten Tomatoes text is displayed
updateUserVsRt()


/* BUTTON FUNCTIONS */


function openModal() {
    document.getElementById('addModal').style.display = 'block'
}
function closeModal() {
    document.getElementById('addModal').style.display = 'none'
    clearForm()
}
function addBtn() {
    openModal()
}
function updateBtn(movieName, year) {
    const movieIndex = users[0].movies.findIndex(movie => movie.name.toLowerCase() === movieName.toLowerCase() && movie.year === parseInt(year))
    const movie = users[0].movies[movieIndex]

    // populate modal with current movie details
    document.getElementById('movieName').value = movie.name
    document.getElementById('genres').value = movie.genres
    document.getElementById('year').value = movie.year
    document.getElementById('director').value = movie.director
    document.getElementById('favActors').value = movie.favActors
    document.getElementById('userRating').value = movie.userRating
    document.getElementById('criticScore').value = movie.rtScores[0]
    document.getElementById('audScore').value = movie.rtScores[1]
    document.getElementById('review').value = movie.review
    document.getElementById('poster').value = movie.poster


    openModal()


    document.getElementById('updateButton').onclick = function () {
        updateMovie(movieIndex)
    }
}
function dropdownClick(event, type) {
    const dropdownContent = document.querySelector(type)
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
        dropdownContent.style.display = "block"
    } else {
        dropdownContent.style.display = "none"
    }
    event.stopPropagation() // stop the click event from propagating to the window.onclick event
}
function sortingBtn(type, order) {
    let moviesToSort = isSearching ? searchResults : users[0].movies;
    switch (type) {
        case 'date':
            moviesToSort.sort(function (a, b) {
                let dateA = new Date(a.dateAdded);
                let dateB = new Date(b.dateAdded);
                return order === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
            });
            break;
        case 'rating':
            moviesToSort.sort(function (a, b) {
                if (a.userRating === b.userRating) {
                    return a.name.localeCompare(b.name); // secondary sort by movie name
                }
                return order === 'asc' ? a.userRating - b.userRating : b.userRating - a.userRating;
            });
            break;
        case 'critic':
            moviesToSort.sort(function (a, b) {
                if (a.rtScores[0] === b.rtScores[0]) {
                    return a.name.localeCompare(b.name);
                }
                return order === 'asc' ? a.rtScores[0] - b.rtScores[0] : b.rtScores[0] - a.rtScores[0];
            });
            break;
        case 'audience':
            moviesToSort.sort(function (a, b) {
                if (a.rtScores[1] === b.rtScores[1]) {
                    return a.name.localeCompare(b.name);
                }
                return order === 'asc' ? a.rtScores[1] - b.rtScores[1] : b.rtScores[1] - a.rtScores[1];
            });
            break;
        default:
            break;
    }

    if (isSearching) {
        searchResults = moviesToSort;
    } else {
        filteredMovies = moviesToSort;
    }

    displayFilteredMovies(moviesToSort);
}
function filterBtn(type, compare) {
    switch (type) {
        case "userRating":
            while (true) {
                const rating = prompt("Choose a rating to filter by (0-10)")
                if (rating === null) {
                    return
                }
                if (!isNaN(rating) && rating >= 0 && rating <= 10) {
                    filterMovies(type, parseFloat(rating), compare)
                    break
                } else {
                    alert("Please enter a number between 0 and 10")
                }
            }
            break
        case "genres":
            while (true) {
                const genres = prompt("Enter up to 5 genres to filter by (comma-seperated)):")
                if (genres === null) {
                    return
                }
                const genreList = genres.split(/,\s*|\s*,\s*/)      // regular expression used to split strings that are seperated by a comma while also accounting for white space
                if (genreList.length > 5 || !genres.trim()) {
                    alert("Please enter up to 5 genres (comma-separated).")
                } else {
                    filterMovies(type, genreList)
                    break
                }
            }
            break
        case "clear":
            filterMovies("clear")
            break
        default:
            console.error("Unknown filter type: ", type)
            break
    }
}
function removeBtn(movieName, year) {
    const answer = confirm("Are you sure you want to remove this movie?")
    if (answer) {
        removeMovie("01", movieName, parseInt(year))
        updateUserVsRt()
        displayMovieReviews(users)
    } else {

    }
}
function hideSortDropdown() {
    const sortContent = document.querySelector('.sort-dropdown-content')
    sortContent.style.display = "none" // always hide on scroll or click
}
function hideFilterDropdown() {
    const filterContent = document.querySelector('.filter-dropdown-content')
    filterContent.style.display = "none"
}
function hideFilterRatingDropdown() {
    const filterRatingContent = document.querySelector('.filter-rating-content')
    filterRatingContent.style.display = "none"
}
function setSearchTypeColor(type) {
    if (type === 'titles') {
        const titlesButtons = document.getElementsByClassName('search-option-titles');
        const actorsButtons = document.getElementsByClassName('search-option-actors');
        for (let i = 0; i < titlesButtons.length; i++) {
            titlesButtons[i].style.backgroundColor = '#c56b84';
            titlesButtons[i].style.color = 'linen';
        }
        for (let i = 0; i < actorsButtons.length; i++) {
            actorsButtons[i].style.backgroundColor = 'peachpuff';
            actorsButtons[i].style.color = '#c56b84';
        }
    } else {
        const titlesButtons = document.getElementsByClassName('search-option-titles');
        const actorsButtons = document.getElementsByClassName('search-option-actors');
        for (let i = 0; i < titlesButtons.length; i++) {
            titlesButtons[i].style.backgroundColor = 'peachpuff';
            titlesButtons[i].style.color = '#c56b84';
        }
        for (let i = 0; i < actorsButtons.length; i++) {
            actorsButtons[i].style.backgroundColor = '#c56b84';
            actorsButtons[i].style.color = 'linen';
        }
    }
}
function searchBtn(type) {
    const searchItem = document.getElementById('searchBox').value.toLowerCase()
    switch (type) {
        case "titles":
            const foundTitles = users[0].movies.filter(movie => {
                const isTitleMatch = movie.name.toLowerCase().includes(searchItem)
                return isTitleMatch
            })
            if (foundTitles.length === 0) {
                alert("No movies found")
                isSearching = false
                return
            } else {
                searchResults = foundTitles
                displayFilteredMovies(searchResults)
                isSearching = true
                clearSearch()
            }
            break
        case "actors":
            const foundActors = users[0].movies.filter(movie => {
                const isActorMatch = movie.favActors.some(actor => actor.toLowerCase().includes(searchItem))
                return isActorMatch
            })
            if (foundActors.length === 0) {
                alert("No actors found")
                isSearching = false
                return
            } else {
                searchResults = foundActors
                displayFilteredMovies(searchResults)
                isSearching = true
                clearSearch()
            }
            break
    }

}
function returnBtn() {
    if (isFilteringGenre || isFilteringRating) {
        displayFilteredMovies(filteredMovies)
        isSearching = false
    } else {
        displayMovieReviews(users)
        isSearching = false
    }
    clearSearch()
}
function openHelp() {
    document.getElementById('helpModal').style.display = 'block'
}
function getHelp() {

}
function closeHelp() {
    document.getElementById('helpModal').style.display = 'none'
}
function enterDownSearch(event) {
    if (event.key === 'Enter') {
        searchBtn(searchType);
    }
}