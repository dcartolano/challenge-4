// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelectorAll('main');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM
function elementBuilder() {
    const text = document.createElement('tx');
    tx.textContent = 'text here!';
    document.body.appendChild(text);

};

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {

};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    if (mainElement !== '') {

    }   else {
        noPosts();
    }
};

// TODO: Call the `renderBlogList` function
renderBlogList;

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backButton.addEventListener('click', redirectURL());
