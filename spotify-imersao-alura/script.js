const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylists = document.getElementById('result-playlits');

function requestApi(searchTerm) {
    const url = 'http://localhost:3000/artists/?name_like=${searchTerm}'
    fetch(url)
        .then((Response) => Response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylists.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');

}



document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylists.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})