let infoVisible = false;
const infoButton = document.getElementById("infoButton");
const moreInfo = document.getElementById("moreInfo");

if (infoButton && moreInfo) {
    infoButton.addEventListener("click", () => {
        if (infoVisible) {
            moreInfo.style.display = "none";
            infoButton.setAttribute("aria-expanded", "false");
            infoButton.textContent = "Show More Information";
        } else {
            moreInfo.style.display = "block";
            moreInfo.setAttribute("aria-expanded", "true");
            infoButton.textContent = "Hide Information";
        }
        infoVisible = !infoVisible;
    });
}


const links = document.querySelectorAll("nav a");
const buttons = document.querySelectorAll("button");

links.forEach(link => {
    link.addEventListener("focus", () => {
        link.style.border = "2px solid #3498db"; 
    });
    link.addEventListener("blur", () => {
        link.style.border = "none"; 
    });
});

buttons.forEach(button => {
    button.addEventListener("focus", () => {
        button.style.border = "2px solid #3498db"; 
    });
    button.addEventListener("blur", () => {
        button.style.border = "none"; 
    });
});


const images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("mouseover", () => {
        image.style.opacity = 0.8;
    });
    image.addEventListener("mouseout", () => {
        image.style.opacity = 1;
    });
});

function validateForm() {
    let isValid = true;

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.style.display = 'none');

    const firstName = document.getElementById('firstName').value;
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }

    const lastName = document.getElementById('lastName').value;
    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}


document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('about.html')) {

        const newsTicker = [
            "Over 500 students attended the Software Engineering awards event!",
            "The event featured an inspiring talk by previous year winner Sarah May.",
            "Cantor College is planning to host more exciting events in 2024!"
        ];

        let tickerIndex = 0;
        const tickerContent = document.getElementById("ticker-content");
        tickerContent.textContent = newsTicker[tickerIndex];

        setInterval(() => {
            tickerIndex = (tickerIndex + 1) % newsTicker.length;
            tickerContent.textContent = newsTicker[tickerIndex];
        }, 4000); 

        
        const eventDate = new Date("2024-12-30T09:00:00");
        const countdownElement = document.getElementById("countdown-timer");

        function updateCountdown() {
            const now = new Date();
            const timeLeft = eventDate - now;

            if (timeLeft <= 0) {
                countdownElement.textContent = "The event is now live!";
                clearInterval(countdownInterval);
            } else {
                const days = Math.floor(timeLeft / (86400000));
                const hours = Math.floor((timeLeft % 86400000) / 3600000);
                const minutes = Math.floor((timeLeft % 3600000) / 60000);
                const seconds = Math.floor((timeLeft % 60000) / 1000);
                countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }
        const countdownInterval = setInterval(updateCountdown, 100);
    }
});







