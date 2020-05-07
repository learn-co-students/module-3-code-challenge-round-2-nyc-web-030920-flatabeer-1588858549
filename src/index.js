document.addEventListener('DOMContentLoaded', function () {
    getData()
    updateDescription()
    addReview()
    let id = 1
    function getData() {
        fetch(`http://localhost:3000/beers/${id}`)
        .then(response => response.json())
        .then(data => displayData(data))
    }
    function displayData(data) {
        let details = document.getElementsByClassName('beer-details')[0]
        let name = details.getElementsByTagName('h2')[0]
        name.innerText = data.name
        console.log(name)
        let pic = details.getElementsByTagName('img')[0]
        pic.src = data.image_url
        let descriptionForm = details.getElementsByClassName('description')[0]
        let descriptionArea = descriptionForm.getElementsByTagName('textarea')[0]
        descriptionArea.innerText = data.description
        let reviewList = details.getElementsByClassName('reviews')[0]
        console.log(reviewList)
        while (reviewList.hasChildNodes()) {
        reviewList.removeChild(reviewList.firstChild)
        }
        data.reviews.forEach(review => {
            let reviewEle = document.createElement('li')
            reviewEle.innerText = review
            reviewList.appendChild(reviewEle)
        }) 
        
    
        

    }
    function updateDescription() {
        let descriptionForm = document.getElementsByClassName('description')[0]
        let descriptionArea = descriptionForm.getElementsByTagName('textarea')[0]
        descriptionForm.addEventListener('submit', function () {
            let newDescription = descriptionArea.value
            fetch(`http://localhost:3000/beers/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json"
                },
                body: JSON.stringify({description: newDescription})
            })
            .then(getData())
        })
    }
    function addReview() {
        
    }
})