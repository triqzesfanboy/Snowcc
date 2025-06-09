document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');
    const numSnowflakes = 100;

    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Random size (2px to 5px)
        const size = Math.random() * 3 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Random horizontal position
        snowflake.style.left = `${Math.random() * 100}vw`;

        // Animation duration (5s to 15s)
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;

        // Animation delay
        snowflake.style.animationDelay = `${Math.random() * 10}s`;

        snowContainer.appendChild(snowflake);
    }
});