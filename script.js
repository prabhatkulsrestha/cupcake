function updateCountup() {
    // Calculate the time until the anniversary (9th May 2023)
    const anniversaryDate = new Date('2023-05-09');
    const currentDate = new Date();

    const timeDifference = anniversaryDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const countupTimer = document.getElementById('countup-timer');
    countupTimer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function createFirework() {
    const fireworks = document.createElement('div');
    fireworks.className = 'fireworks';
    document.getElementById('fireworks-container').appendChild(fireworks);
    fireworks.style.left = `${Math.random() * 100}vw`;
    fireworks.style.animation = `firework-rise ${Math.random() * 2 + 1}s linear`;

    fireworks.addEventListener('animationend', () => {
        fireworks.remove();
    });
}

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    document.getElementById('balloon-container').appendChild(balloon);
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animation = `balloon-rise 10s infinite linear`;

    balloon.addEventListener('animationiteration', () => {
        balloon.style.left = `${Math.random() * 100}vw`;
    });
}

function playCelebrationAudio() {
    const celebrationAudio = document.getElementById('celebration-audio');
    celebrationAudio.play();
}

function celebrate() {
    // Play audio
    playCelebrationAudio();

    // Create fireworks
    for (let i = 0; i < 10; i++) {
        createFirework();
    }

    // Create balloons
    for (let i = 0; i < 10; i++) {
        createBalloon();
    }
}

setInterval(updateCountup, 1000);
updateCountup();

document.getElementById('celebrate-button').addEventListener('click', celebrate);

function getRandomColor() {
    const colors = ['#ffcc00', '#ff66b2', '#00aaff', '#ff3366', '#33cc33'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomSize() {
    return `${Math.random() * 30 + 10}px`;
}

function createRandomFirework() {
    const fireworksContainer = document.getElementById('fireworks-container');
    
    const fireworks = document.createElement('div');
    fireworks.className = 'fireworks';
    fireworks.style.backgroundColor = getRandomColor();
    fireworks.style.width = getRandomSize();
    fireworks.style.height = getRandomSize();
    fireworksContainer.appendChild(fireworks);
    
    fireworks.style.left = `${Math.random() * 100}vw`;
    fireworks.style.top = `${Math.random() * 100}vh`;
    fireworks.style.animation = `firework-rise ${Math.random() * 2 + 1}s linear`;

    fireworks.addEventListener('animationend', () => {
        fireworks.remove();
    });
}

function celebrate() {
    // Play audio
    playCelebrationAudio();

    // Create full-screen fireworks with random colors and sizes
    for (let i = 0; i < 50; i++) {
        createRandomFirework();
    }
}

document.getElementById('celebrate-button').addEventListener('click', celebrate);
