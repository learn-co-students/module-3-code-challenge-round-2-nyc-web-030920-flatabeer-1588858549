document.addEventListener("DOMContentLoaded", function(){
    receiveData()
    updateBeer()
    leaveReview()
})

beersURL = "http://localhost:3000/beers"
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

function receiveData(){
    fetch(`${beersURL}/1`)
    .then(response => response.json())
    .then(data => renderFirstBeer(data))
}

function renderFirstBeer(data){
   const beerDiv = document.querySelector('.beer-details');

   beerDiv.innerHTML = `
    <h2>${data.name}</h2>
    <img src="${data.image_url}">
    `

    const beerForm = document.createElement('form')
    beerForm.className = 'description'
    beerForm.dataset.id = data.id
    beerForm.innerHTML =  `
        <textarea>${data.description}</textarea>
        <button type="submit">Update Beer</button>
    `

    const reviewH3 = document.createElement('h3')
    reviewH3.innerText = "Leave a Review"

    const beerReviewForm = document.createElement('form')
    beerReviewForm.className = "review-form"
    beerReviewForm.dataset.id = data.id
    beerReviewForm.innerHTML = `
        <textarea></textarea>
         <input type="submit" value="Submit">
    `

    const customerReviewsH3 = document.createElement('h3')
    customerReviewsH3.innerText = "Customer Reviews"
    const reviewUL = document.createElement('ul')
    reviewUL.className = "reviews"
    
    data.reviews.forEach(review => {
        const li = document.createElement('li')
        li.innerText = review
        reviewUL.append(li)
    })

    beerDiv.append(beerForm, reviewH3, beerReviewForm, customerReviewsH3, reviewUL)

}

function updateBeer(){
    document.body.addEventListener("submit", function(event){
        event.preventDefault()
        let id = event.target.dataset.id
        if(event.target.innerText === "UPDATE BEER"){
            const description = event.target.childNodes[1].value

            fetch(`${beersURL}/${id}`, {
                method: "PATCH",
                headers: headers,
                body: JSON.stringify({description: description})
            })
        }
    })
}

function leaveReview(){
    document.body.addEventListener("click", function(event){
       if(event.target.value === "Submit"){
           let id = parseInt(event.target.parentNode.dataset.id)
           let newReviewLi = document.createElement('li')
           newReviewLi.innerText = event.target.parentNode.childNodes[1].value
           let reviewUL = document.querySelector('.reviews')
           reviewUL.append(newReviewLi)

           fetch(`${beersURL}/${id}`, {
               method: "POST",
               headers: headers,
               body: JSON.stringify({reviews: newReviewLi})
           })
       }
    })
}



// function clearPage(){
//     document.body.innerHTML =  `
//     <header>
//     <h1>FlataBeer</h1>
//     <nav>
//       <ul>
//         <li>Don't worry about</li>
//         <li>This menu unless</li>
//         <li>You get to Advanced Deliverables</li>
//         <li>Beer Name</li>
//         <li>Another Beer Name</li>
//         <li>And Another Beer Name</li>
//       </ul>
//     </nav>
//   </header>

//   <main>
//     <div class="beer-details">
//       <h2>Beer Name Goes Here</h2>
//       <img src="assets/image-placeholder.jpg">

//       <form class="description">
//         <textarea>Beer description goes here</textarea>
//         <button>Update Beer</button>
//       </form>

//       <h3>Leave a Review</h3>
//       <form class="review-form">
//         <textarea></textarea>
//         <input type="submit" value="Submit">
//       </form>

//       <h3>Customer Reviews</h3>
//       <ul class="reviews">
//         <li>Replace with actual reviews</li>
//         <li>From the server</li>
//       </ul>
//     </div>
//   </main>
//     `
// }
