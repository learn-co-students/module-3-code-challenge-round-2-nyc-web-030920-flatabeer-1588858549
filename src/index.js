

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

const form = document.getElementsByClassName('description')[0];
form.addEventListener('submit', function () {
    const inputDat = document.getElementsByTagName('textarea')[0].value
    updateBeerDescription(inputData)
})


function updateBeerDescription(data) {
    fetch("http://localhost:3000/beers/1") , {
        mehthod: "PATCH",
        body: {
            description: data
        }
    })
    .then(resp => resp.json())
    .then(data => setUpBeer(data.description))
}

fucntion setUpBeer(description) {
    const beerDetail = document.getElementsByTagName('textarea')[0]
    if (beerDetail){
        beerDetail.innerHTML = description
    }
}
