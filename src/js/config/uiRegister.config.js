import {
  getAutocompleteInstance,
  getDatepickerInstance,
} from '../plugins/materialize/materialize';
import { formatDate } from '../helpers/date';

class RegUI {
  constructor(autocompleteInstance, datepickerInstance) {
    this.regForm = document.forms['registerForm'];

    this.regEmail = document.getElementById('reg-email');
    this.regPass = document.getElementById('reg-password');
    this.nickname = document.getElementById('nickname');
    this.firstName = document.getElementById('first_name');
    this.lastName = document.getElementById('last_name');
    this.phone = document.getElementById('phone');
    this.gender = document.getElementById('gender_orientation');

    this.country = document.getElementById('autocomplete-country');
    this.countryAutocomplete = autocompleteInstance(this.country);

    this.city = document.getElementById('autocomplete-city');
    this.cityAutocomplete = autocompleteInstance(this.city);

    this.birthday = document.getElementById('birth_day');
    this.birthdayDatePicker = datepickerInstance(this.birthday);
  }

  get form() {
    return this.regForm;
  }

  get regEmailVal() {
    return this.regEmail.value;
  }
  get regPassVal() {
    return this.regPass.value;
  }
  get nicknameVal() {
    return this.nickname.value;
  }
  get firstNameVal() {
    return this.firstName.value;
  }
  get lastNameVal() {
    return this.lastName.value;
  }
  get phoneVal() {
    return this.phone.value;
  }
  get genderVal() {
    return this.gender.value;
  }

  get countryValue() {
    return this.country.value;
  }
  get cityValue() {
    return this.city.value;
  }

  get birthdayDateValue() {
    const date = formatDate(this.birthdayDatePicker.toString());
    console.log(date);
    return date;
  }

  setAutocompleteData(data) {
    this.countryAutocomplete.updateData(data);
    this.cityAutocomplete.updateData(data);
  }
}

const regUI = new RegUI(getAutocompleteInstance, getDatepickerInstance);

export default regUI;
