document.addEventListener('DOMContentLoaded', function () {
    getData()
    updateDescription()
    addReview()
    
    function getData() {
        let id = 1
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
        console.log(data.reviews)
        data.reviews.forEach(review => {
            let reviewEle = document.createElement('li')
            reviewEle.innerText = review
            reviewList.appendChild(reviewEle)
        })  
    }
    function updateDescription() {
        let id = 1

        let descriptionForm = document.getElementsByClassName('description')[0]
        let descriptionArea = descriptionForm.getElementsByTagName('textarea')[0]
        descriptionForm.addEventListener('submit', function (event) {
            event.preventDefault()
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
        let reviewForm = document.getElementsByClassName('review-form')[0]
        let reviewText = reviewForm.getElementsByTagName('textarea')[0]
        
        reviewForm.addEventListener('submit', function (event) {
            event.preventDefault()
           
            let reviewListEle = document.getElementsByClassName('reviews')[0]
            let reviewListCollection = reviewListEle.getElementsByTagName('li')
            console.log(reviewListCollection.length)
        let reviewsArray = []
        for (var i = 0, len = reviewListCollection.length; i < len; i++ ) {
            reviewsArray.push(reviewListCollection[i].innerText)
        }
        console.log(reviewsArray)

            let reviewList = document.getElementsByClassName('reviews')[0]
            let reviewEle = document.createElement('li')
            reviewEle.innerText = reviewText.value
            reviewList.appendChild(reviewEle)
            console.log(reviewText)
            // let id = 1
            // fetch(`http://localhost:3000/beers/${id}`, {
            //     method: 'PATCH',
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Accepts": "application/json"
            //     },
            //     body: JSON.stringify({reviews: (reviewsArray.push(reviewText.value))})
            // })
            // .then(getData())
        })
    }
})