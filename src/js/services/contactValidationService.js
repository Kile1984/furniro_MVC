export const validateContactForm = function (data) {
  const errors = {};
  // name
  const name = data.name.trim();
  const nameRegEx = /^[A-Za-zÀ-ž' -]+$/;

  if (!(name.length >= 2 && nameRegEx.test(name))) {
    errors.name = "Name is invalid";
  }

  // email
  const email = data.email.trim();
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegEx.test(email)) {
    errors.email = "Email is invalid";
  }

  // subject
  const subject = data.subject.trim();

  if (subject.length > 30) {
    errors.subject = "Subject is too long";
  }

  // message
  const message = data.message.trim();

  if (message.length < 10 || message.length > 1000) {
    errors.message = "Message must contain 10–1000 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
