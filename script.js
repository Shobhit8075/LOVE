document.addEventListener('DOMContentLoaded', function () {
    const heart = document.querySelector('.heart');
    let lidRaised = false;

    heart.addEventListener('click', function () {
        const lid = document.querySelector('.lid');
        const heartsContainer = document.querySelector('.hearts');
        const letters = document.querySelectorAll('.n');

        if (!lidRaised) {
            lid.classList.add('raised');
            createHearts();
            startLetterAnimation(letters);
            lidRaised = true;
        } else {
            lid.classList.remove('raised');
            stopHearts();
            lidRaised = false;
        }
    });
});

function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-animation');
        heart.style.left = `${Math.random() * 350}px`;
        heart.style.bottom = `40px`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.style.animationPlayState = 'running'; // Start the animation
        }, 0);

        // setTimeout(() => {
        //     
        //     heart.remove();
        // }, 5000);
    }
}

function stopHearts() {
    const hearts = document.querySelectorAll('.heart-animation');
    hearts.forEach(heart => {
        heart.style.animationPlayState = 'paused';
    });

    setTimeout(() => {
        location.reload(); // Auto-refresh the page after stopping the hearts
    }, 0);
}

function startLetterAnimation(letters) {
    letters.forEach((letter, index) => {
        // letter.style.left = `-100px`;
        letter.style.animation = `above 5s linear forwards`;
        letter.style.animationDelay = `${index * 0.5}s`;
    });
}