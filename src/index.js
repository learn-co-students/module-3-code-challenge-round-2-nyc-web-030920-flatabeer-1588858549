// Code here


document.addEventListener('DOMContentLoaded', (event) => {
    fetchBeer()
    const oneDescription = document.getElementsByClassName('description')[0]
    const ul = document.getElementsByClassName('reviews')[0]
   const beerDetail = document.getElementsByClassName('beer-details')[0]
   const reviewForm = document.getElementsByClassName('review-form')[0]
   const button = document.getElementsByTagName('button')[0]
//    const li = document.getElementsByTagName('li')[0]
const descText = document.getElementsByTagName('textarea')[0]
console.log(descText)
    function fetchBeer(){
        fetch('http://localhost:3000/beers/1')
        .then(r => r.json())
        .then(firstBeer => firstBeerInfo(firstBeer))
    }

    function firstBeerInfo(firstBeer){
       const oneName = firstBeer.name
       const h2 = document.getElementsByTagName('h2')[0]
       h2.innerText = oneName

       const oneImage = document.getElementsByTagName('img')[0]
           oneImage.src = firstBeer.image_url

           firstBeer.reviews.forEach(review =>{
              const li = document.createElement('li')
              li.innerText = review 
            ul.append(li)
           })

          
           


           oneDescription.addEventListener('submit', writeDescription)

           reviewForm.addEventListener('submit', addReview)
    }

    function addReview(event){
        event.preventDefault()
       
        const newLi = document.createElement('li')

        reviewForm.textContent.value = newLi.innerText
        ul.append(newLi)

    }
    

   function writeDescription(event){
       event.preventDefault()
    
       fetch('http://localhost:3000/beers/1')
       .then(r => r.json())
        .then(data => {
            data.description = oneDescription.textContent
            console.log(oneDescription.descTextarea)
        })
        }


})