document.addEventListener('DOMContentLoaded', (event) => {
    let beerDetails = document.querySelector('.beer-details')
    let desc = beerDetails.querySelector('.description')
    let form = document.querySelector('.review-form')

    fetch(`http://localhost:3000/beers/1`)
        .then(response => response.json())
        .then(beer => createBeer(beer))

    function createBeer(beer) {
        let beerDetails = document.querySelector('.beer-details')
        let desc = beerDetails.querySelector('.description')
        let form = document.querySelector('.review-form')

        title = beerDetails.querySelector('h2')
        picture = beerDetails.querySelector('img')
        descText = desc.querySelector('textarea')
        reviews = form.querySelector('textarea')

        title.innerText = beer.name
        picture.src = beer.image_url
        descText.innerText = beer.description
        reviews.innerText = beer.reviews

    }

    desc.addEventListener('click', (event) => {
        event.preventDefault()
        let updateButton = desc.querySelector('button')


        if (event.target === updateButton) {
            let desc = beerDetails.querySelector('.description')
            descText = desc.querySelector('textarea')
            descText.innerText = descText.value

            fetch(`http://localhost:3000/beers/1`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify({
                    description: descText.value 
                })
            })
                .then(res => res.json())
        }
    })

    form.addEventListener('submit',(event) => {
        event.preventDefault
        console.log('meow')
    })




})