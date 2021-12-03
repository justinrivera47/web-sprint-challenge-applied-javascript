import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //creating mark up
  const cardContainer = document.createElement('div');
  const headline = document.createElement('div');
  const authorName = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const spanAuthorName = document.createElement('span');
  //appending children
  cardContainer.appendChild(headline);
  headline.appendChild(authorName);
  authorName.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorName.appendChild(spanAuthorName);
  //adding classnames 
  cardContainer.classList.add('card');
  headline.classList.add('headline');
  authorName.classList.add('author');
  imgContainer.classList.add('img-container');
  //img source
  img.src = article.authorPhoto
  //text content
  headline.textContent = article.headline
  spanAuthorName.textContent = `By ${article.authorName}`

  return cardContainer
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const inject = document.querySelector(selector);

  const typesOfScript = ['javascript',
  'bootstrap',
  'technology',
  'jquery',
  'node.js'];
  typesOfScript.forEach(types => {
  axios.get(`http://localhost:5000/api/articles/${types}`)
  .then(data => {
    inject.appendChild(Card(data.data))
  })
  .catch(error => console.log(error))
})





  // axios.get(`http://localhost:5000/api/articles`)
  // .then(resp => {
  //   console.log(resp.data.articles)
  //   const javascript = resp.data.articles.javascript;
  //   javascript.forEach((props => {
  //     inject.appendChild(Card(props));
  //   })
  //   )
  // })
  //   .catch(err => {
  //     console.log(err);
  //   })
  
}

export { Card, cardAppender }
