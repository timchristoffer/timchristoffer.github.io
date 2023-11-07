particlesJS("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color:{
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity: 1,
                opacity_min: 0,
                sync: false

            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,


        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onCLick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
})

function scrollToTop(){
    window.scrollTo({
        top: 0,
    })
}

window.addEventListener('scroll', function(){
    var scrollTopButton = this.document.querySelector('.scroll-top');
    if(this.window.pageYOffset > 200){
        scrollTopButton.style.display = 'block';
    }else{
        scrollTopButton.style.display = 'none';
    }
});

// Hitta elementen i DOM
const showFormLink = document.querySelector('.show-contact-form');
const contactForm = document.getElementById('contact-form');

// Lyssna på klickhändelse för "Email Me" länken
showFormLink.addEventListener('click', () => {
    contactForm.style.display = 'block';
});

// Lyssna på formulärets inlämning
const emailForm = document.getElementById('email-form');
emailForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Hämta användarens inmatning från formuläret
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Här kan du skicka användarens inmatning till en server för att hantera e-postmeddelandet (server-sidan är inte inkluderad här).

    // Återställ formuläret efter att meddelandet har skickats
    emailForm.reset();
    contactForm.style.display = 'none';
});

// Hitta ikonen i DOM
const closeFormIcon = document.querySelector('#contact-form label i');

// Hitta kontaktformuläret
const contactForms = document.getElementById('contact-form');

// Lyssna på klickhändelse på ikonen
closeFormIcon.addEventListener('click', () => {
    contactForms.style.display = 'none'; // Dölj formuläret när ikonen klickas
});

// Dölj formuläret när sidan laddas
contactForm.style.display = 'none';

// Sample comment data
const comments = [
    { name: 'User 1', email: 'user1@example.com', text: 'Comment 1' },
    { name: 'User 2', email: 'user2@example.com', text: 'Comment 2' },
    // Add more comments here
];

    // Function to add a new comment
    function addComment() {
        const nameInput = document.getElementById("comment-name");
        const emailInput = document.getElementById("comment-email");
        const commentInput = document.getElementById("comment-text");
        const commentList = document.getElementById("comment-list");

        const name = nameInput.value;
        const email = emailInput.value;
        const comment = commentInput.value;

        if (name && email && comment) {
            // Create a new comment div
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");

            // Create elements for the comment content
            const commentText = document.createElement("p");
            commentText.textContent = comment;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");

            // Add comment content to the comment div
            commentDiv.appendChild(commentText);
            commentDiv.appendChild(deleteButton);

            // Add the comment div to the comment list
            commentList.appendChild(commentDiv);

            // Clear input fields
            nameInput.value = "";
            emailInput.value = "";
            commentInput.value = "";
        }
    }

    // Event listener for adding a comment
    document.getElementById("add-comment").addEventListener("click", addComment);

    // Event delegation to handle click events on delete buttons
    document.getElementById("comment-list").addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-button")) {
            const commentDiv = event.target.closest(".comment");
            if (commentDiv) {
                commentDiv.remove();
            }
        }
    });

    // Hitta alla knappar med klassen "card-button"
    const buttons = document.querySelectorAll('.card-button');

    // Lyssna på klickhändelser för varje knapp
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Hitta målet som ska visas/döljas baserat på "data-target" attributet
            const targetId = button.getAttribute('data-target');
            const target = document.getElementById(targetId);

            // Dölj alla kort
            const allCards = document.querySelectorAll('.card');
            allCards.forEach(card => {
                card.style.display = 'none';
            });

            // Visa endast det valda målet
            target.style.display = 'block';
        });
    });
