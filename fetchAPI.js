const gameCtn = document.getElementById("games");

export async function loadGames(){
    try{
            const resp = await fetch('https://zelda.fanapis.com/api/games?limit=10')
            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }

    const data = await resp.json();
           
    const games = data.data;

    // display(games);
    console.log(games)
    for(let i = 0; i < games.length; i++) {
        const title = document.createElement('h2')
        title.innerHTML = `${games.name}`
        gameCtn.append(title)
    }
            
}catch(error){
    console.error('Error fetching data:', error);
}
}



// export const gameCtn = document.getElementById("games");

//     fetch('https://zelda.fanapis.com/api/games?limit=10')
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return res.json();
//         })
//         .then(data => {
//             const games = data.data;

//             games.forEach(game => {
//                 const gameItem = document.createElement('div');
//                 gameItem.classList.add('game-item'); 

//                 gameItem.innerHTML = `
//                     <h2>${game.name}</h2>
//                     <p>${game.description}</p>
//                     <p>Released Date: ${game.released_date}</p>
//                 `;

//                 gameCtn.appendChild(gameItem);
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));