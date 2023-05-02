//API token 202631339203700

const button = document.getElementById('search')
const heroNameInput = document.getElementById('heroName')
const randomBtn = document.getElementById('random')

const BASE_URL = `https://superheroapi.com/api.php/202631339203700`

const getSuperHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        const stats = getStats(json)
        const heroName = `<h2>${json.name}</h2>`
        const imgCanvas = document.getElementById('heroCanvas')
        imgCanvas.innerHTML = `${heroName} <img class="hero-img" src="${json.image.url}" height=300 /> ${stats}`
    })
}

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪🏻',
    speed: '⚡',
    durability: '🏋🏻‍♂️',
    power: '👊🏻',
    combat: '🔪'
}

const getStats = (character) => {
    const stats = Object.keys(character.powerstats).map(stat => {
        const statValue = `<p>${statToEmoji[stat]} ${stat}: ${character.powerstats[stat]}</p>`
        return statValue
    })
    return stats.join('')
}

const getSearchSuperHero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        const stats = getStats(hero)
        const heroName = `<h2>${hero.name}</h2>`
        const imgCanvas = document.getElementById('heroCanvas')
        imgCanvas.innerHTML = `${heroName}<img src="${hero.image.url}" height=300 /> ${stats}`
    })
}
button.onclick = () => getSearchSuperHero(heroNameInput.value)


const randomHeroPicker = () => {
    const numberOfHeros = 731
    const random = Math.floor(Math.random() * numberOfHeros) + 1
    return random
}

randomBtn.onclick = () => getSuperHero(randomHeroPicker())

// button.onclick = () => getSuperHero(heroNameInput.value)