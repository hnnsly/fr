const modal = document.getElementById('modal');
const btns = document.getElementsByClassName('openModal');
const closeBtn = document.getElementById('close');
const form = document.getElementById("contactForm");



function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

Array.from(btns).forEach(btn => {
  btn.addEventListener('click', openModal);
});

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log("Форма отправлена");

  if (form.checkValidity()) {
    console.log("Форма валидна");
    closeModal();

    setTimeout(() => {
      alert("спасибо деду за победу")
    }, 500);

  } else {
    console.log("Форма не валидна");
    form.reportValidity();
  }
});
