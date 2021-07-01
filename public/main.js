const form = document.getElementById('contact-form');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
  form.innerHTML="Thank you! Your message was successfully sent!"
});

const sendMail = (mail) => {
  fetch('/', {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};
