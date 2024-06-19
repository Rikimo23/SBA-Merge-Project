


document.addEventListener('DOMContentLoaded', function () {
    const gameCtn = document.getElementById("games");

    fetch('https://zelda.fanapis.com/api/games?limit=10')
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            const games = data.data;

            games.forEach(game => {
                const gameItem = document.createElement('div');
                gameItem.classList.add('game-item'); // Adding a class for styling

                gameItem.innerHTML = `
                    <h2>${game.name}</h2>
                    <p>${game.description}</p>
                    <p>Released Date: ${game.released_date}</p>
                `;

                gameCtn.appendChild(gameItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});