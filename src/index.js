document.addEventListener('DOMContentLoaded',function(){ 

    function beerInfo(){
        let name = document.querySelector('h2')
        let image = document.querySelector('img')
        let description = document.querySelector('textarea')
        let reviews =document.querySelector('.reviews li')   
    
        function createReviewList(li){
        return document.createElement(li);
        };

        function replaceCurrentReviews(reviews, li){
        return reviews.replaceChild(li,li);
        };

        function replaceBeerName(name, h2){
        return name.replaceChild(h2,h2);
        };

        function replaceImg(image, img){
        return image.replaceChild(img, img);
        };

        function replaceDescription(description, textarea){
        return description.replaceChild(textarea, textarea);
        };
    };

   
    fetch('http://localhost:3000/beers')
    .then((resp) => resp.json())
    .then(function(data){
        let beerInfo = data.results
        

    })
})
