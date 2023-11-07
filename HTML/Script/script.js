const list = document.querySelectorAll('.list');
const content = document.querySelectorAll('.content');

function activeLink(index) {
    list.forEach((item) => item.classList.remove('active'));
    list[index].classList.add('active');
    content.forEach((item) => item.classList.remove('active'));
    content[index].classList.add('active');
}

list.forEach((item, index) => {
    item.addEventListener('click', () => activeLink(index));
});

// Initially set the first item as active
activeLink(0);

const darkLightToggle = document.getElementById('dark-light-toggle');
const body = document.body;

darkLightToggle.addEventListener('change', () => {
  if (darkLightToggle.checked) {
    body.classList.add('light-mode');
  } else {
    body.classList.remove('light-mode');
  }
});