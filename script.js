const qInput = document.querySelector('#q');
const searchForm = document.querySelector('#search-form');

fetch('https://www.loc.gov/film-and-videos/?q=dog&fo=json')
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        console.log('FORMAT');
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });

    fetch('https://www.loc.gov/search/?q=baseball&fo=json')
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        console.log('SEARCH');
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });

    searchForm.addEventListener('submit', function () {
        fetch('https://www.loc.gov/search/?q=baseball&fo=json')
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        console.log('SEARCH');
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });
    })