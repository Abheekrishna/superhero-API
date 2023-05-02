//API token 202631339203700

const button = document.getElementById('search')
const heroNameInput = document.getElementById('heroName')
const randomBtn = document.getElementById('random')

const BASE_URL = `https://superheroapi.com/api.php/202631339203700`

const getSuperHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        const imgCanvas = document.getElementById('heroCanvas')
        imgCanvas.innerHTML = `<img src="${json.image.url}" height=300 />`
        const superHeroName = document.getElementById('superHeroName')
        superHeroName.innerText = `${json.name}`
    })
}

const getSearchSuperHero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        const imgCanvas = document.getElementById('heroCanvas')
        imgCanvas.innerHTML = `<img src="${hero.image.url}" height=300 />`
        const superHeroName = document.getElementById('superHeroName')
        superHeroName.innerText = `${hero.name}`
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