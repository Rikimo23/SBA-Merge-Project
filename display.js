export function display(games){

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item'); 

        gameItem.innerHTML = `
            <h2>${game.name}</h2>
            <p>${game.description}</p>
            <p>Released Date: ${game.released_date}</p>
        `;

        gameCtn.appendChild(gameItem);
    });



}