// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


function cardMaker(artObject) {

        const card = document.createElement('div')
        card.classList.add('card')
        
        const headline = document.createElement('div')
        headline.classList.add('headline')
        headline.textContent = artObject.headline
        
        const author = document.createElement('div')
        author.classList.add('author')

        const imgContainer = document.createElement('div')
        imgContainer.classList.add('img-container')
        
        const img = document.createElement('img')
        img.src = artObject.authorPhoto   

        const authName = document.createElement('span')
        authName.textContent = `By ${artObject.authorName}`

        card.appendChild(headline)
        card.appendChild(author)
        author.appendChild(imgContainer)
        imgContainer.appendChild(img)
        author.appendChild(authName)
       
    card.addEventListener('click', () => {
        console.log(artObject.headline)
    })
    
    return card

}


axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(api => {

        const cardEntry = document.querySelector('.cards-container')

        const javascript = api.data.articles.javascript
        const bootstrap = api.data.articles.bootstrap
        const technology = api.data.articles.technology
        const jquery = api.data.articles.jquery
        const node = api.data.articles.node

        javascript.forEach(object => {
            const javaCard = cardMaker(object)
            cardEntry.appendChild(javaCard)
        })

        bootstrap.forEach(object => {
            const bootCard = cardMaker(object)
            cardEntry.appendChild(bootCard)
        })
        technology.forEach(object => {
            const techCard = cardMaker(object)
            cardEntry.appendChild(techCard)
        }) 
        jquery.forEach(object => {
            const jqueryCard = cardMaker(object)
            cardEntry.appendChild(jqueryCard)
        })   
        node.forEach(object => {
            const nodeCard = cardMaker(object)
            cardEntry.appendChild(nodeCard)
        })
    })
    .catch(error => {

        console.log(error)
    })
        
        
        
        
        // const bootstrap = api.data.articles.bootstrap
        // const technology = api.data.articles.technology
        // const jquery = api.data.articles.jquery
        // const node = api.data.articles.node

        // const javaCard = cardMaker(javascript) 
        // const bootCard = cardMaker(bootstrap)
        // const techCard = cardMaker(technology)
        // const jqCard = cardMaker(jquery)
        // const nodeCard = cardMaker(node)
       
        // const cardContainer = document.querySelector('.cards-container')

        // cardContainer.appendChild(javaCard)
        // cardContainer.appendChild(bootCard)
        // cardContainer.appendChild(techCard)
        // cardContainer.appendChild(jqCard)
        // cardContainer.appendChild(nodeCard)


