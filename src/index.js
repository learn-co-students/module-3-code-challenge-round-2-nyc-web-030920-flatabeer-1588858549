// Code here
// GET `/beers/[:id]` (start with /beers/1)
// - PATCH `/beers/[:id]`
 
document.addEventListener('DOMContentLoaded',function(){
// const beerDetails = document.querySelector(".beer-details")
    fetch(`http://localhost:3000/beers/1`)
    .then(resp => resp.json())
    .then(beer => displayBeer(beer))

    function displayBeer(beer){
        const beerDetails = document.querySelector(".beer-details")

        const newDiv = document.createElement('div')



        newDiv.innerHTML += `
        <h2> ${beer.name} </h2>
        <img src = "${beer.img_url}">
        <text area> ${beer.description}</text area>
        `

        beerDetails.append(newDiv)
    
    }
})