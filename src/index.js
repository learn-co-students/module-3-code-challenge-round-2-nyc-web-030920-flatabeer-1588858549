// Code here


document.addEventListener('DOMContentLoaded', (event) => {
    fetchBeer()
    const oneDescription = document.getElementsByClassName('description')[0]

   const beerDetail = document.getElementsByClassName('beer-details')

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

           oneDescription.textContent  = firstBeer.description
           
    }


})