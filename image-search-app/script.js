'use strict'
const accessKey = 'zn_ICEVRU812yKjNNQRkjghT2ftP94_yZAy6ePat3tI';

const formEl = document.querySelector('form');
const searchInputEl = document.getElementById('search-input');
const searchResultsEl = document.querySelector('search-results');
const showButtonEl = document.getElementById('show-btn');

let inputData = '';
let page = 1;

async function searchImg(){
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (page === 1){
        searchResultsEl.innerHTML = " ";
    }

    const results = data.results;
    console.log(results);
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImg();
})