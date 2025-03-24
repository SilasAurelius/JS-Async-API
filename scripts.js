async function getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1;
    
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
        displayPokemonData(data);
    } catch (error) {
        console.error(error);
        document.getElementById("pokemonContainer").innerHTML = "Error loading Pokémon data!";
    }
}

function displayPokemonData(data) {
    // Converted height from decimeters to feet and weight to pounds.
    const heightInFeet = (data.height * 0.328084).toFixed(2);
    const weightInPounds = (data.weight * 0.220462).toFixed(2);

    const pokemonInfo = `
        <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <div>
            <p><strong>Height:</strong> ${heightInFeet} feet</p>
            <p><strong>Weight:</strong> ${weightInPounds} pounds</p>
            <p><strong>Types:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
        </div>
    `;
    
    document.getElementById("pokemonContainer").innerHTML = pokemonInfo;
}
