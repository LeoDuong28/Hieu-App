export default function register_validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.username === "") {
    error.email = "Username is Empty!";
  } /*else if (!email_pattern.test(values.username)) {
    error.username = "Cannot find Username";
  }*/ else {
    error.username = "";
  }

  if (values.email === "") {
    error.email = "Email is Empty!";
  } /*else if (!email_pattern.test(values.email)) {
    error.email = "Cannot find Email";
  } */ else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password is Empty!";
  } /*else if (!password_pattern.test(values.password)) {
    error.password = "Wrong Password!!!";
  } */ else {
    error.password = "";
  }

  return error;
}
