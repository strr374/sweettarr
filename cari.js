document.getElementById('search-button').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah link default
    let query = document.getElementById('search-input').value;
    let resultDiv = document.getElementById('search-results');
    
    if (query) {
        resultDiv.innerHTML = 'Hasil pencarian untuk: ' + query;
    } else {
        resultDiv.innerHTML = 'Masukkan kata kunci untuk mencari!';
    }
});
