document.addEventListener('DOMContentLoaded', function() {
    const movieSearch = document.getElementById('movie-search');
    const genreSearch = document.getElementById('genre-search');
    const searchBtn = document.getElementById('search-btn');
    const reviews = document.querySelectorAll('.review');

    // Populate genre dropdown
    const genres = new Set();
    reviews.forEach(review => {
        const genre = review.getAttribute('data-genre');
        if (genre) genres.add(genre);
    });
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreSearch.appendChild(option);
    });

    // Search function
    function filterReviews() {
        const movieQuery = movieSearch.value.toLowerCase();
        const genreQuery = genreSearch.value;

        reviews.forEach(review => {
            const title = review.getAttribute('data-title').toLowerCase();
            const genre = review.getAttribute('data-genre');
            const matchesMovie = title.includes(movieQuery);
            const matchesGenre = genreQuery === '' || genre === genreQuery;

            if (matchesMovie && matchesGenre) {
                review.style.display = 'block';
            } else {
                review.style.display = 'none';
            }
        });
    }

    // Event listeners
    searchBtn.addEventListener('click', filterReviews);
    movieSearch.addEventListener('input', filterReviews);
    genreSearch.addEventListener('change', filterReviews);
});
