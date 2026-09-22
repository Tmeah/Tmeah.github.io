let contrastToggle = false;
let isModalOpen = false;
const scaleFactor = 1 / 20;

const EMAILJS_PUBLIC_KEY = "user_BBq1wqUbR0NpeCxXj9acX";
const EMAILJS_SERVICE_ID = "service_3z6t7ek";
const EMAILJS_TEMPLATE_ID = "template_xpg0xms";
const CONTACT_EMAIL = "tausifmeah@gmail.com";

if (typeof emailjs !== "undefined") {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

function openHeader() {
  document
    .getElementById("header__anchor")
    .classList.toggle("header__logo--popper1");
}

function stopOpac() {
  document
    .getElementById("header__logo--hover")
    .classList.toggle("header__logo--hover");
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function openMailtoFallback(name, email, message) {
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

function contact(event) {
  event.preventDefault();
  const form = event.target;
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");

  if (typeof emailjs === "undefined") {
    loading.classList.remove("modal__overlay--visible");
    openMailtoFallback(
      form.user_name.value,
      form.user_email.value,
      form.message.value
    );
    return;
  }

  emailjs
    .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
      form.reset();
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      openMailtoFallback(
        form.user_name.value,
        form.user_email.value,
        form.message.value
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList.add("modal--open");
}
