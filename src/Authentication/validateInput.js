export const validateEmail = (email) => {
  var response = "email valid";

  const email_reg = /^[^\s@]+@[^\s@]+$/;
  if (email_reg.test(email) == false) response = "email is invalid";

  if (email.length == 0) response = "email cannot be empty";

  return {
    valid: response == "email valid" ? true : false,
    response: response,
  };
};

export const validatePassword = (password) => {
  var response = "password valid";

  if (password.length < 6) response = "password should be > 6";
  if (password.length == 0) response = "password cannot be empty";

  return {
    valid: response == "password valid" ? true : false,
    response: response,
  };
};
