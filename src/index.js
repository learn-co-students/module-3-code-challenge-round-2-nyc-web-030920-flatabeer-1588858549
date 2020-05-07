// Code here

document.addEventListener("DOMContentLoaded", function(event){
    fetchAll()
    displayComment()
})

const requestHeaders = {"accept": "application/json", "content-type": "application/json"}


function fetchAll(){
    fetch(`http://localhost:3000/beers/1`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        displayWeb(data)
        
 
    })
}

//======================================

function displayWeb(data){
        // let id = beer.dataset.id = beer.id 
        let name = document.getElementsByClassName("beer-details")[0]
        let title = document.getElementsByTagName("h2")[0]
        title.innerHTML = `
        <h2>${data.name}</h2>
        <img src=${data.image_url}>
        
        <form class="description">
        <textarea>${data.description}</textarea>
        <button>Update Beer</button>
      </form>

      <h3>Leave a Review</h3>
      <form class="review-form">
        <textarea></textarea>
        <input type="submit" value="Submit">
      </form>

      <h3>Customer Reviews</h3>
      <ul class="reviews">
        <li>${data.reviews}</li>
      </ul>
      `
        name.appendChild(title)
    
}


//======================================

function displayComment(){

}