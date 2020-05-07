// Code here
/*
- GET request to see the first beer's details, including its name, image, description, and reviews, when the page loads
- PATCH Change the beer's description and still see that change when reloading the page
Add a review for the beer (no persistence needed)
*/

document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://localhost:3000/beers'
    const requestHeaders = {
        'accept': 'application/json',
        'content-type': 'application/json'
    }

    fetch(baseUrl)
        .then(resp => resp.json())
        .then(beers => beers.forEach(beer => renderBeers(beer)))

    function renderBeers(beer) {
        const beerName = document.querySelector('.beer-name')
        const beerImage = document.querySelector('.beer-image')
        const beerDescription = document.querySelector('.description')
        const beerUl = document.querySelector('.reviews')
        beerName.dataset.id = beer.id 
        
        beerName.innerText = beer.name
        beerImage.src = beer.image_url
        beerDescription.textContent = beer.description

        beer.reviews.forEach(review => {
            let beerReviewsArr = beer.reviews
            let arrLength = beerReviewsArr.length
            for(let i=0; i < arrLength; i++) {
                let beerLi = beerReviewsArr[i]
                beerUl.append(beerLi)
            }
        })
    }

    document.addEventListener('click', event => {
        if(event.target.className === 'description') {
            const form = document.querySelector('.description')
            const id = form.dataset.id

            fetch(`${baseUrl}/${id}`, {
                method: 'PATCH',
                headers: requestHeaders,
                body: JSON.stringify()
            })
        }
    })
})
