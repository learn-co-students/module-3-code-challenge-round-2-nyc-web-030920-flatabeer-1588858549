

document.addEventListener('DOMContentLoaded', function (){

    getBeer();
  

})

function getBeer() {
    fetch ("http://localhost:3000/beers/1")
    .then(resp => resp.json())
    .then(beer => addBeer(beer))
}

function addBeer(beer){
    const beerName = document.getElementsByClassName("beer-details")[0].children[0]
    beerName.innerText = `${beer.name}`
    const beerImage = document.getElementsByClassName("beer-details")[0].children[1]
    beerImage.src = `${beer.image_url}`
    const beerDescription = document.getElementsByClassName("description")[0].children[0]
    beerDescription.innerText = `${beer.description}`
    const beerReview = document.getElementsByClassName("reviews")[0].children[0]
    const beerReviewTwo = document.getElementsByClassName("reviews")[0].children[1]
    beerReview.innerText = `${beer.reviews[0]}`
    beerReviewTwo.innerText = `${beer.reviews[1]}`
    const beerReviewThree = document.createElement('li')
    beerReviewThree.innerText = `${beer.reviews[2]}`
    const beerReviewFour = document.createElement('li')
    beerReviewFour.innerText = `${beer.reviews[3]}`
    const beerReviewList = document.getElementsByClassName("reviews")[0]
    beerReviewList.append(beerReviewThree, beerReviewFour)
}

const beerForm = document.getElementsByClassName("description")[0].children[1]
beerForm.addEventListener('click', function (e) {
e.preventDefault()
let description = e.target.description.value 
    const inputData = document.getElementsByClassName("description")[0].children[0].value
    updateBeerDescription(inputData);
})

function updateBeerDescription(inputData) {
    fetch("http://localhost:3000/beers/1") , {
        method: 'PATCH',
        body: {
            description: inputData
        }
    })
    .then(resp => resp.json())
    .then(data =>updateBeeretail)
}