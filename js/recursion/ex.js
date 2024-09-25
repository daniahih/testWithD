// 1. Count Movies Watched
function countMovies(movies) {
  if (movies.length === 0) return 0;
  return 1 + countMovies(movies.slice(1));
}

console.log(countMovies(["Inception", "The Matrix", "Interstellar"])); // Output: 3

// 2. Find Movie by Title
function findMovie(movies, title) {
  if (movies.length === 0) return false;
  if (Array.isArray(movies[0]))
    return findMovie(movies[0], title) || findMovie(movies.slice(1), title);
  return movies[0] === title || findMovie(movies.slice(1), title);
}

console.log(
  findMovie(
    [
      ["Inception", "The Matrix"],
      ["Interstellar", "Dunkirk"],
    ],
    "Inception"
  )
); // Output: true

// 3. Total Movie Duration
function totalDuration(durations) {
  if (durations.length === 0) return 0;
  return durations[0] + totalDuration(durations.slice(1));
}

console.log(totalDuration([120, 150, 180])); // Output: 450

// 4. Find Longest Movie
function findLongestMovie(durations) {
  if (durations.length === 1) return durations[0];
  const longestRest = findLongestMovie(durations.slice(1));
  return durations[0] > longestRest ? durations[0] : longestRest;
}

console.log(findLongestMovie([120, 150, 180])); // Output: 180

// 5. Calculate Average Movie Rating
function averageRating(ratings) {
  function sum(ratings) {
    if (ratings.length === 0) return 0;
    return ratings[0] + sum(ratings.slice(1));
  }

  return sum(ratings) / ratings.length;
}

console.log(averageRating([4.5, 4.0, 5.0])); // Output: 4.5

// 6. List All Genres
function listGenres(genres, result = []) {
  if (genres.length === 0) return [...new Set(result)];
  if (Array.isArray(genres[0]))
    return listGenres(genres.slice(1), listGenres(genres[0], result));
  return listGenres(genres.slice(1), [...result, genres[0]]);
}

console.log(
  listGenres([["Action", "Thriller"], ["Drama", "Action"], ["Sci-Fi"]])
); // Output: ['Action', 'Thriller', 'Drama', 'Sci-Fi']

// 7. Find Movies by Director
function findMoviesByDirector(movies, director) {
  if (movies.length === 0) return [];
  const rest = findMoviesByDirector(movies.slice(1), director);
  return movies[0].director === director ? [movies[0].title, ...rest] : rest;
}

console.log(
  findMoviesByDirector(
    [
      { title: "Inception", director: "Nolan" },
      { title: "The Matrix", director: "Wachowski" },
    ],
    "Nolan"
  )
); // Output: ['Inception']

// 8. Calculate Total Box Office Earnings
function totalEarnings(movies) {
  if (movies.length === 0) return 0;
  return movies[0].earnings + totalEarnings(movies.slice(1));
}

console.log(
  totalEarnings([
    { title: "Inception", earnings: 800 },
    { title: "The Matrix", earnings: 700 },
  ])
); // Output: 1500

// 9. Find Movie with Highest Rating
function findHighestRatedMovie(movies) {
  if (movies.length === 1) return movies[0].title;
  const highestRest = findHighestRatedMovie(movies.slice(1));
  return movies[0].rating > movies.slice(1)[0].rating
    ? movies[0].title
    : highestRest;
}

console.log(
  findHighestRatedMovie([
    { title: "Inception", rating: 4.5 },
    { title: "The Matrix", rating: 4.0 },
  ])
); // Output: 'Inception'

// 10. Count Movies by Genre
function countMoviesByGenre(movies, genre) {
  if (movies.length === 0) return 0;
  const countRest = countMoviesByGenre(movies.slice(1), genre);
  return movies[0].genre === genre ? 1 + countRest : countRest;
}

console.log(
  countMoviesByGenre(
    [
      { title: "Inception", genre: "Sci-Fi" },
      { title: "The Matrix", genre: "Sci-Fi" },
      { title: "Titanic", genre: "Drama" },
    ],
    "Sci-Fi"
  )
); // Output: 2

// 11. Find Shortest Movie Title
function findShortestTitle(titles) {
  if (titles.length === 1) return titles[0];
  const shortestRest = findShortestTitle(titles.slice(1));
  return titles[0].length < shortestRest.length ? titles[0] : shortestRest;
}

console.log(findShortestTitle(["Inception", "The Matrix", "Up"])); // Output: 'Up'

// 12. Filter Movies by Minimum Rating
function filterMoviesByRating(movies, minRating) {
  if (movies.length === 0) return [];
  const rest = filterMoviesByRating(movies.slice(1), minRating);
  return movies[0].rating >= minRating ? [movies[0], ...rest] : rest;
}

console.log(
  filterMoviesByRating(
    [
      { title: "Inception", rating: 4.5 },
      { title: "The Matrix", rating: 4.0 },
      { title: "Interstellar", rating: 5.0 },
    ],
    4.5
  )
); // Output: [{title: 'Inception', rating: 4.5}, {title: 'Interstellar', rating: 5.0}]

// 13. Find Director with Most Movies
function findDirectorWithMostMovies(movies, directors = {}) {
  if (movies.length === 0) {
    return Object.keys(directors).reduce((a, b) =>
      directors[a] > directors[b] ? a : b
    );
  }

  const director = movies[0].director;
  directors[director] = (directors[director] || 0) + 1;

  return findDirectorWithMostMovies(movies.slice(1), directors);
}

console.log(
  findDirectorWithMostMovies([
    { title: "Inception", director: "Nolan" },
    { title: "The Matrix", director: "Wachowski" },
    { title: "Dunkirk", director: "Nolan" },
  ])
); // Output: 'Nolan'

// 14. Flatten Movie Lists
function flattenMovieList(movies) {
  if (movies.length === 0) return [];
  if (Array.isArray(movies[0]))
    return [
      ...flattenMovieList(movies[0]),
      ...flattenMovieList(movies.slice(1)),
    ];
  return [movies[0], ...flattenMovieList(movies.slice(1))];
}

console.log(
  flattenMovieList([
    ["Inception", "The Matrix"],
    ["Interstellar", ["Dunkirk"]],
  ])
); // Output: ['Inception', 'The Matrix', 'Interstellar', 'Dunkirk']

// 15. Merge Movie Ratings
function mergeRatings(ratingLists) {
  if (ratingLists.length === 0) return [];
  return ratingLists.flat().sort((a, b) => a - b);
}

console.log(
  mergeRatings([
    [4.5, 4.0],
    [5.0, 3.5],
  ])
); // Output: [3.5, 4.0, 4.5, 5.0]

// 16. Sum Movie Budgets
function sumMovieBudgets(movies) {
  if (movies.length === 0) return 0;
  return movies[0].budget + sumMovieBudgets(movies.slice(1));
}

console.log(
  sumMovieBudgets([
    { title: "Inception", budget: 160 },
    { title: "The Matrix", budget: 150 },
  ])
); // Output: 310

// 17. Find Actor in Movies
function findActor(movies, actor) {
  if (movies.length === 0) return false;
  return movies[0].actors.includes(actor) || findActor(movies.slice(1), actor);
}

console.log(
  findActor(
    [
      { title: "Inception", actors: ["Leonardo DiCaprio"] },
      { title: "The Matrix", actors: ["Keanu Reeves"] },
    ],
    "Leonardo DiCaprio"
  )
); // Output: true

// 18. Check if All Movies are Rated Above
function allMoviesRatedAbove(movies, threshold) {
  if (movies.length === 0) return true;
  return (
    movies[0].rating > threshold &&
    allMoviesRatedAbove(movies.slice(1), threshold)
  );
}

console.log(
  allMoviesRatedAbove(
    [
      { title: "Inception", rating: 4.5 },
      { title: "The Matrix", rating: 4.0 },
    ],
    4.0
  )
); // Output: false
