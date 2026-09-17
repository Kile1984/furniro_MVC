export const validatePlaceOrderForm = function (data) {
  const errors = {};

  // first_name
  const firstName = data.firstName.trim();
  const firstNameRegEx = /^[A-Za-zÀ-ž' -]+$/;

  if (
    firstName.length < 2 ||
    firstName.length > 50 ||
    !firstNameRegEx.test(firstName)
  ) {
    errors.firstName = "Name is Invalid";
  }

  // last_name
  const lastName = data.lastName.trim();

  const lastNameRegEx = /^[A-Za-zÀ-ž' -]+$/;

  if (
    lastName.length < 2 ||
    lastName.length > 50 ||
    !lastNameRegEx.test(lastName)
  ) {
    errors.lastName = "Last name is invalid";
  }

  // company
  const company = data.company.trim();

  if (company.length > 100) {
    errors.company = "Company name is too long";
  }

  // street_address
  const address = data.address.trim();

  if (address.length < 3 || address.length > 150) {
    errors.address = "Street address is invalid";
  }

  // town_city
  const town = data.town.trim();

  const townRegEx = /^[A-Za-zÀ-ž' -]+$/;

  if (town.length < 2 || town.length > 100 || !townRegEx.test(town)) {
    errors.town = "Town / City is invalid";
  }

  // zip
  const zip = data.zip.trim();

  const zipRegEx = /^\d{5}$/;

  if (!zipRegEx.test(zip)) {
    errors.zip = "ZIP code is invalid";
  }

  // phone
  const phone = data.phone.trim();

  const phoneRegEx = /^\+?[0-9 ()-]{7,20}$/;

  if (!phoneRegEx.test(phone)) {
    errors.phone = "Phone number is invalid";
  }

  // email
  const email = data.email.trim();

  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegEx.test(email)) {
    errors.email = "Email is invalid";
  }

  // additional_info
  const message = data.message.trim();

  if (message.length > 1000) {
    errors.message = "Additional information is too long";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
