import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UILogin from './config/uiLogin.config';
import UIReg from './config/uiRegister.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login } from './services/auth.service';
import { notify } from './views/notifications';
import { getNews } from './services/news.service';
import './plugins/materialize';
import { register } from './services/reg.service';

const { formLogin, inputEmail, inputPassword } = UILogin;
const formReg = UIReg.form;
const inputs = [inputEmail, inputPassword];

// Events
formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  onSubmit();
});

inputs.forEach((el) => {
  el.addEventListener('focus', () => removeInputError(el));
});

formReg.addEventListener('submit', (e) => {
  e.preventDefault();
  onRegister();
});

// Handlers
async function onSubmit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    form.reset();
    notify({ msg: 'Login success', className: 'alert-success' });
  } catch (error) {
    notify({ msg: 'Login failed', className: 'alert-danger' });
  }
}

async function onRegister() {
  const regEmail = UIReg.regEmailVal;
  const regPass = UIReg.regPassVal;
  const nickname = UIReg.nicknameVal;
  const firstName = UIReg.firstNameVal;
  const lastName = UIReg.lastNameVal;
  const phone = UIReg.phoneVal;
  const gender = UIReg.genderVal;
  const country = UIReg.countryValue;
  const city = UIReg.cityValue;
  const birthday = UIReg.birthdayDateValue;
  // email,
  //   password,
  //   nickname,
  //   first_name,
  //   last_name,
  //   phone,
  //   gender_orientation,
  //   city,
  //   country,
  //   date_of_birth_day,
  //   date_of_birth_month,
  //   date_of_birth_year
  const obj = {
    email: regEmail,
    password: regPass,
    nickname: nickname,
    first_name: firstName,
    last_name: lastName,
    phone: phone,
    gender_orientation: gender,
    city: city,
    country: country,
    date_of_birth_day: birthday.date_of_birth_day,
    date_of_birth_month: birthday.date_of_birth_month,
    date_of_birth_year: birthday.date_of_birth_year,
  };

  try {
    await register(obj);
  } catch (error) {
    console.log(error);
  }
}
