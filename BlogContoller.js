// Get references to your elements
const articleList = document.querySelector('.article-list');
const articleFull = document.querySelector('.article-full');

// Example article content (replace with your data source)
const articles = {
    1: {
        title: 'Starting the Blog',
        date: 'September 23, 2023',
        author: 'Ethan Smith',
        content: '<p>Now I\'m sure you\'re wondering, "Why start a Blog?" well we\'re here to answer that question. So we are starting a Blog here as a way to keep anyone interested in our humble little studio up to date on what\'s what. This lets us communicate with everybody through a fairly simple medium. Ideally we\'d like to encourage community engagement and in our current state attract potential clients or general interest. Looking at the Blog in its current state is not the most visually appealing thing in the world, the blog is currently very bare bones and quite literally the minimum. This is obviously not the end version of the Blog as it will be not only recieving content updates but general functionality improvements. I\'d like to get the Blog to a point where it has the ability to comment, like, dislike, etc. We will see just how far the Blog makes it over time.</p>',
    },
    2: {
        title: 'Article 2',
        date: 'September 15, 2023',
        content: '<p>This is the content of Article 2...</p>',
    },
    // Add more articles as needed
};

// Add a click event listener to each summary rectangle
articleList.addEventListener('click', (event) => {
    // Check if the clicked element is a summary rectangle
    if (event.target.classList.contains('summary-rectangle')) {
        // Get the article ID from the data attribute
        const articleId = event.target.dataset.articleId;
        
        // Load and display the full article content
        displayFullArticle(articles[articleId]);
    }
});

// Function to display the full article
function displayFullArticle(article) {
    // Construct the HTML for the full article
    const fullArticleHTML = `
        <h2>${article.title}</h2>
        <p>Date: ${article.date}</p>
        <p>Written by: ${article.author}</p>
        ${article.content}
    `;
    
    // Set the innerHTML of the article-full container with the full article content
    articleFull.innerHTML = fullArticleHTML;
    
    // Show the article-full container
    articleFull.style.display = 'block';
}
