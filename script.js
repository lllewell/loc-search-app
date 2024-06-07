const qInput = document.querySelector('#q');
const searchForm = document.querySelector('#search-form');
const resultList = document.querySelector('#results');

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


    searchForm.addEventListener('submit', function (event) {
        event.preventDefault

        const q = qInput.ariaValueMax.trim();
        fetch('https://www.loc.gov/search/?q=' + q + '&fo=json')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log('SEARCH');
          console.log(data);
  
          for (let result of data.results) {
            const columnEl = document.createElement('div');
            const cardEl = document.createElement('div');
  
            columnEl.className = 'col-12';
            cardEl.className = 'card p-3 m-3';
            cardEl.textContent = result.title;
  
            columnEl.appendChild(cardEl);
            resultList.appendChild(columnEl);
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    });