const accessKey = 'zn_ICEVRU812yKjNNQRkjghT2ftP94_yZAy6ePat3tI';

const formEl = document.querySelector('form');
const searchInputEl = document.getElementById('search-input');
const searchResultsEl = document.querySelector('search-results');
const showButtonEl = document.getElementById('show-btn');

let inputData = '';

function searchImg(){
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    searchImg();
})