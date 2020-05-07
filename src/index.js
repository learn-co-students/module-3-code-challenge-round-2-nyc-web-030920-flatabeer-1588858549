// Code here

document.addEventListener("DOMContentLoaded", function(event){
    fetchAll()
    editDescription()
    addReview()
})

const requestHeaders = {"accept": "application/json", "content-type": "application/json"}


function fetchAll(){
    fetch(`http://localhost:3000/beers/1`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        displayWeb(data)
        displayComment(data)
 
    })
}

//======================================

function displayWeb(data){
     let beerDetail = document.querySelector('.beer-details')
     let h2 = document.getElementsByTagName('h2')[0]
     h2.innerText = `${data.name}`
     let image = document.getElementsByTagName('img')[0]
     image.src = `${data.image_url}`
     let beerDescription = document.getElementsByTagName('textarea')[0]
     beerDescription.innerText = `${data.description}`
    
    
}
//======================================
function displayComment(data){
    let beerReviews = document.getElementsByClassName("reviews")[0]
    data.reviews.forEach(function(comment){
        let li = document.createElement("li")
        li.innerText = `${comment}`
        console.log(comment)
        beerReviews.appendChild(li)
    })
}
       

//======================================

function editDescription(){
    let descriptionForm = document.getElementsByClassName("description")[0]
    descriptionForm.addEventListener('submit', function(event){
        event.preventDefault()
        console.log(event)
        let newDetails = event.target.textarea
        let newDescription = document.getElementsByTagName("textarea")[0].value 
        fetch("http://localhost:3000/beers/1", {
        method: "PATCH",
        headers: requestHeaders, 
        body: JSON.stringify({description: newDescription})
        })
    })
}
//======================================
function addReview(){
    let reviewForm = document.getElementsByClassName("review-form")[0]
    reviewForm.addEventListener('submit',function(event){
        event.preventDefault()
         let review = document.querySelector('.reviews')
         let comment = document.getElementsByTagName('textarea')[1].value
         let li = document.createElement("li")
         li.innerText = comment 
         review.appendChild(li)
    })
}