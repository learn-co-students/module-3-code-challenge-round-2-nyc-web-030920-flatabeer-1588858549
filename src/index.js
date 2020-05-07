const endPoint = `http://localhost:3000/beers/1`




document.addEventListener('DOMContentLoaded', ()=>{

renderBeer()



    document.addEventListener('click', (e)=>{

        if(e.target.textContent === 'Update Beer'){
            e.preventDefault()
            updateDes()   
            console.log('Saved')
        }else if(e.target.value === 'Submit'){
            // console.log('Hi')
            e.preventDefault()
            let reviewForm = document.getElementsByClassName('review-form')[0]
            // console.log(reviewForm[0].value)
            // debugger
            let li = document.createElement('li')
            li.textContent= reviewForm[0].value
            
            let ul = document.getElementsByClassName('reviews')[0]
            // console.log(ul)
            ul.appendChild(li)

        }

    })




})


function renderBeer(){

    fetch(endPoint)
    .then(resp=>resp.json())
    .then(beer=>seeBeer(beer))


}

function seeBeer(beer){
    let beerH2 = document.getElementsByTagName('h2')[0]
    // console.log(beerH2)
    beerH2.textContent = beer.name 
    let beerImg = document.getElementsByTagName('img')[0]
    // console.log(beerImg)
    beerImg.src = beer.image_url
    let beerForm = document.querySelector('.description')[0]
    // console.log(beerForm)
    beerForm.textContent = beer.description 
    let beerReview = document.querySelector('.reviews').children
    // console.log(beerReview[0].textContent)
    beerReview[0].textContent = beer.reviews[0]
    beerReview[1].textContent = beer.reviews[1]
    

}

function updateDes(){
    let form = document.getElementsByClassName('description')
    console.log(form[0].textContent)
    let description = form[0].textContent
    // console.log(description)

    fetch(endPoint, {
        method: 'PATCH',
        headers:
        {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
            description
        })
    })
  

}