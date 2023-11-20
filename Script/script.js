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

// Anropar GitHub API för att hämta och uppdatera "Senaste uppdateringen gjordes"-fliken.
const repoOwner = 'timchristoffer';
const repoName = 'timchristoffer.github.io';
const branch = 'main';

const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/branches/${branch}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Uppdaterar tidstampeln för senaste uppdateringen.
        const lastUpdatedElement = document.getElementById('updateTimestamp');
        const lastUpdatedDate = new Date(data.commit.commit.author.date);
        lastUpdatedElement.textContent = lastUpdatedDate.toLocaleString();
    })
    .catch(error => {
        console.error('Error fetching GitHub data:', error);
    });