// Code here
// GET `/beers/[:id]` (start with /beers/1)
// - PATCH `/beers/[:id]`
 
document.addEventListener('DOMContentLoaded',function(){
// const beerDetails = document.querySelector(".beer-details")
    fetch(`http://localhost:3000/beers/1`)
    .then(resp => resp.json())
    .then(beer => displayBeer(beer))

    function displayBeer(beer){
        const beerDetails = document.querySelector(".beer-details")
        beerDetails.children[0].innerText = `${beer.name}`
    //    debugger // beerDetails.innerHTML = '${beer.name}'
    // debugger
     beerDetails.children[1].src = `${beer.img_url}`
     

     const formDetail = document.querySelector(".description")
    //  debugger
     formDetail.children[0].innerHTML = `${beer.description}`

   formDetail.addEventListener('click',function(e){
    // debugger
    let textArea = e.target.parentElement.children[0].value
    
    fetch(`http://localhost:3000/beers/1`,{
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
            description : textArea

        })
       })

})
 


// let reviewForms = document.querySelector(".reviews")

// beer.reviews.forEach(function(beer){
//     let existingReview = document.createElement('li')
//     // debugger
//     existingReview.innerHTML = beer.review
//     reviewForms.append(existingReview)

// })
// }

     


let reviewForm = document.querySelector(".review-form")

reviewForm.addEventListener('submit',function(e){
    e.preventDefault();
    let newText = e.target.children[0].value
    let ul = document.querySelector('.reviews')
    let li = document.createElement('li')
    li.innerText = newText
   ul.append(li)
})

    }    
    
    
})