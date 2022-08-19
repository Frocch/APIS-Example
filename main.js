// const { default: axios } = require("axios")

const button = document.querySelector('#btn')
const resident = document.querySelector('#resident')
const form = document.querySelector('#planetForm')
const input = document.querySelector('#planetInput')

const btnClick = (e) => {
    e.preventDefault()
    axios.get(`https://swapi.dev/api/planets/?search=${input.value}`)
    .then((res) => {
        for (let i = 0; i < res.data.results.length; i++) {
            res.data.results[i].residents.forEach(elem => {
                axios.get(elem)
                .then((response) => {
                    const heading = document.createElement("div")
                    heading.innerHTML = `<h2>${response.data.name}</h2>`
                    resident.appendChild(heading)
                    
                 }) 
            });
        }
    })
}

form.addEventListener('submit', btnClick)