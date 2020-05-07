// http://localhost:3000
// GET /beers/[:id] (start with /beers/1)
// PATCH /beers/[:id]
// GET /beers (for Advanced Deliverables only)


// √See the first beer's details, including its name, image, description, and reviews, when the page loads
// Patch Change the beer's description and still see that change when reloading the page
// Add a review for the beer (no persistence needed)
// Advanced Deliverables
// These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills. Consider refactoring your current code before moving on.

// Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

// As a user, I can:

// PATCH ASYNC Still see the review after refreshing the page
//  add Delete btn a review
// See a menu of all beers on the left side of the page - clicking a beer's name replaces the currently displayed beer's details with the details of the beer I clicked on (it's OK if the update beer description and add review buttons still persist data to the first beer instead of the selected beer)

document.addEventListener("DOMContentLoaded", function(event){
    getBeer()
    function getBeer(){
        fetch("http://localhost:3000/beers/1")
        .then(r => r.json())
        .then(beer =>{
            const div = document.querySelector(".beer-details")
            const h2 = document.querySelector("h2")
            h2.innerText = `${beer.name}`
            const form = document.querySelector(".description")
            form.innerHTML=`
                <textarea>${beer.description}</textarea>
                <button class="btn">update</button>
            
            `
            const img = document.querySelector("img")
            img.src = `${beer.image_url}`
            ul = document.querySelector(".reviews")
            beer.reviews.forEach(review => {
                addReview(beer) 
            })
            
            form.addEventListener("click",function(event){
                event.preventDefault()
                const newDescription = event.target.value 
                fetch("http://localhost:3000/beers/1")
                .then()

            
            })
           
        })
        
    }
    function addReview(beer){
        ul.innerHTML = ''
        for(let i = 0; i < beer.reviews.length; i++){
            const li = document.createElement('li')
            li.innerText = beer.reviews[i]
            ul.append(li)
        }  
    }


})