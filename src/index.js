// Code her
document.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');

    fetch('http://localhost:3000/beers')
        .then(response => response.json())
        .then(beer => getBeer(beer[0]));


    function getBeer(beer) {
        let beerDescription = document.querySelector('.description')
        // console.log(beerDescription)
        beerDescription.firstElementChild.innerText = `${beer.description}`
        beerDescription.firstElementChild.id = beer.id
        beerDescription.firstElementChild.className = "desc"
        let button = document.getElementsByTagName("button")[0]
        button.id = beer.id
        button.className = "submit"
        let beerName = document.getElementsByTagName('h2')[0]
        // console.log(beerName)
        beerName.innerText = `${beer.name}`
        let beerImg = document.getElementsByTagName('img')[0]
        // console.log(beerImg)
        beerImg.src = beer.image_url
        let beerReviews = document.querySelector('.reviews')
        console.log(beerReviews)
        beerReviews.children = ""

        // console.log(beerReviews.children)
        beer.reviews.forEach(review => {
            // console.log(beerReviews)

            beerReviews.children = ""
            beerReviews
        })

        let form = document.querySelector(".description")
        console.log(form)

        form.addEventListener("submit", event => {
            event.preventDefault()
           
            
                let newDescription = document.querySelector('.desc').value
                console.log(newDescription)
                const data = { description: newDescription };

                fetch("http://localhost:3000/beers/1", {
                    method: 'PATCH', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            
        })

        let reviewForm = document.querySelector(".review-form")
        reviewForm.addEventListener('submit', e =>{
            e.preventDefault()
            
                // console.log('submitting')
                let input = document.querySelector('.review-form')[0]
                let newReview = input.value
                let lI = document.createElement("li")
                lI.innerText = newReview
                let uL = document.querySelector('.reviews')
                uL.append(lI)
                

            

        })

    }


});


