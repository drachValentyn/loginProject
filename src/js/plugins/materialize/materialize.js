import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

//Init select
const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(elem) {
  return M.FormSelect.getInstance(elem);
}

//Init autocomplete
const autocompleteCountry = document.getElementById('autocomplete-country');
M.Autocomplete.init(autocompleteCountry, {data: {}, onAutocomplete: function() {
          console.log('txt');
        },} );

export function getAutocompleteInstanceCountry(elem) {
  return M.Autocomplete.getInstance(elem);
}


const autocompleteCity = document.getElementById('autocomplete-city');
M.Autocomplete.init(autocompleteCity, {data: {}});

export function getAutocompleteInstanceCity(elem) {
  return M.Autocomplete.getInstance(elem);
}

//Init datepickers
const datepicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepicker, {
  showClearBtn: true,
  format: 'yyyy-mm-dd'
});

export function getDatepickerInstance(elem) {
  return M.Datepicker.getInstance(elem);
}