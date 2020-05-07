// Code here
// √make fetch request to beers
// √render beers/1
// send PATCH fetch request to beers/1 to update description
// edit dom to display updated description
// edit dom to display new review (no persistence required)
document.addEventListener("DOMContentLoaded", event => {
    const firstBeer= 'http://localhost:3000/beers/1'
    function getBeer(){
        fetch(firstBeer)
        .then(resp => resp.json())
        .then(beer => renderBeer(beer))
    }
    function renderBeer(beer){
        const details = document.querySelector(".beer-details")
        details.innerHTML = 
        `<h2>${beer.name}</h2>
        <img src="${beer.image_url}">

        <form class="description">
          <textarea>${beer.description}</textarea>
          <button class="update">Update Beer</button>
        </form>

        <h3>Leave a Review</h3>
        <form class="review-form">
          <textarea></textarea>
          <input type="submit" value="Submit">
        </form>

        <h3>Customer Reviews</h3>
        <ul class="reviews">
          <li>Replace with actual reviews</li>
          <li>From the server</li>
        </ul>`
    let reviewUl = document.getElementsByClassName('reviews')
    reviewUl[0].innerHTML = ""
    console.log(reviewUl[0])
    beer.reviews.forEach(review => {
        console.log(review)
        li = document.createElement('li')
        li.innerText = review
        reviewUl[0].append(li)        
    })
    }

    getBeer()
})