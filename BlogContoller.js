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
        title: 'State of the Studio',
        date: 'September 24, 2023',
        author: 'Ethan Smith',
        content: '<p>Createa Dev Studios, a small ragtag group of coders, a fairly accurate description of the group. We are technically all coders, but not all of us write code, there is just so much more to it. In practice the vast majority of the coding is handeld by Ethan, that\'s me, though that includes writing code for things I may not be particularly knowledgable about. This very Blog was a shot in the dark, an attempt to put something together to increase appeal and interest in the studio, well that and just something fun to work on. Seeing as the entire site is coded manually, we do not have the benefits of site building UIs or quality of life in design, every single aspect of this site has been hand written. I myself am not a UI designer, this is the main reason for the lack of a "Modern" appearance to the site, I have no problems coding a UI that a client wants or if someone gives me the design, but I have no clue how to actually design a nice UI, that would actually fall under the skillset of one of our other team members. Now to explain why that does not lead to a UI design being made the answer is simply time constraints, the particular member who covers aspects such as UI and UX, simply does not have the availability to work on it yet. Luckily this means we will be improving the UI of our site over time and will likely do a overhaul once our UI/UX guy is available. For why the lack of activity despite being a group, put simply I am the only person who does this full time so far. I handle the business side, research, marketing, customer service, web development, software development, etc. The rest of the team simply isn\'t available yet to dedicate themselves to the studio full time. Luckily I happen to be the Generalist skillset of the group, covering most things we need, but that comes at the cost of not being a specalist. This does not pose much of a problem when working with clients actually if anything it helps, but it is a limitation that can cause me to be outclassed by specalist, to combat this we do charge less than specalists. Not to mention it means I can actually swivel to fix problems that a specalist wouldn\'t have had the skills to also cover. \nWhen it comes down to it, we may not be some group of master class developers, but we don\'t need to be. We still improve consistently and for every step we take half the time we take another 3. Eventually once the whole team is working together we will make even greater strides</p>',
    },
    3:  {
        title: 'What\'s New?',
        date: 'October 3, 2023',
        author: 'Ethan Smith',
        content: '<p>We\'ve been fairly dormant for a little over a week now and for openness and fairness lets go over what\'s been going on. So first we\'ve experienced a lack of notable updates due to Personal Life complicatons for our main coder, me. I have been pushing very minor updates to the site, though they are likely too small to even notice. This will no longer be the case moving forward, I will be continuing to work on the site and push major updates as I complete them. We do still struggle with manpower and lack of availability for most of the team, but this should also be being eased over and more progress will be made more consistently. We are considering working on YouTube videos again as well for any who may be interested in any video based content we create. Stay tuned for more updates in the coming days.</p>',
    },
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
