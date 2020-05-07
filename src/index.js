// Code here
// √make fetch request to beers
// √render beers/1
// √send PATCH fetch request to beers/1 to update description
// √edit dom to display updated description
// √edit dom to display new review (no persistence required)
// √persist added review
document.addEventListener("DOMContentLoaded", event => {
    const firstBeer = 'http://localhost:3000/beers/1'
    
    // MAKES GET REQUEST FOR BEER
    function getBeer() {
        fetch(firstBeer)
            .then(resp => resp.json())
            .then(beer => renderBeer(beer))
    } //closes getBeer function

    // RENDERS FIRST BEER
    function renderBeer(beer) {
        const details = document.querySelector(".beer-details")
        details.innerHTML =
        `<h2>${beer.name}</h2>
        <img src="${beer.image_url}">

        <form class="description">
          <textarea id="description-text">${beer.description}</textarea>
          <button class="update">Update Beer</button>
        </form>

        <h3>Leave a Review</h3>
        <form class="review-form">
          <textarea id="review-text"></textarea>
          <input type="submit" value="Submit">
        </form>

        <h3>Customer Reviews</h3>
        <ul class="reviews">
          <li>Replace with actual reviews</li>
          <li>From the server</li>
        </ul>`
        // DELETES DEFAULT REVIEWS AND ADDS NEW ONES
        let reviewUl = document.getElementsByClassName('reviews')
        reviewUl[0].innerHTML = ""
        beer.reviews.forEach(review => {
            li = document.createElement('li')
            li.innerText = review
            reviewUl[0].append(li)
        }) //closes review forEach loop
    } //closes render beer

    // CLICK LISTENER FOR DESCRIPTION UPDATE
    document.addEventListener('click', e => {
        if (e.target.className === 'update') {
            e.preventDefault()
            description = document.getElementById('description-text')
            fetch(firstBeer, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "description": description.value
                }) //closes body
            }) //closes fetch

        } //closes if statement
    }) //closes click listener

    // EVENT LISTENER FOR REVIEW SUBMIT
    document.addEventListener('submit', e => {
        e.preventDefault()
        review = document.getElementById('review-text').value
        let reviewUl = document.getElementsByClassName('reviews')[0]
        reviewLi = document.createElement('li')
        reviewLi.innerText = review
        reviewUl.append(reviewLi)
        reviewArray = Array.from(reviewUl.getElementsByTagName('li'))
        console.log(reviewUl.getElementsByTagName('li')[0].innerText)
        newArray = []
        reviewArray.forEach(review => {
            newArray.push(review.innerText)
        }) //closes array foreach loop
        
        // MAKES PATCH TO UPDATE BEER COMMENTS
        fetch(firstBeer, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "reviews": newArray
            }) //closes body
        }) //closes fetch
    }) //closes submit listener
    getBeer()
}) //closes domcontent