// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleSwitch = document.getElementById('toggle');
const bodyElement = document.getElementById('body');
var r = document.querySelector(':root');

toggleSwitch.addEventListener('click', function () {
  if (bodyElement.classList.contains('light')){
    bodyElement.className = 'dark';
    r.style.setProperty('--circle-color', 'lightblue');
  }
  else {
    bodyElement.className = 'light';
    r.style.setProperty('--circle-color', '#ffb100');
  }
});

let tempBlogPost = {
  username: [],
  title: [],
  content: [],
};

const runningArray = [];

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  console.log(tempBlogPost);
  const storedData = JSON.parse(localStorage.getItem('tempBlogPost'));
  console.log(storedData);
  if (storedData != null) {

    for (let i = 0; i < tempBlogPost.username.length; i++) {
      const usernameS = tempBlogPost.username[i];
      const titleS = tempBlogPost.title[i];
      const contentS = tempBlogPost.content[i];
      const usernameW = document.createElement("txt");
      usernameW.textContent = usernameS.value;
      document.body.appendChild(usernameW);
      
    }
  }
}



// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(object) {
  
  runningArray.push(object);
  localStorage.setItem('tempBlogPost', JSON.stringify(runningArray));
}


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
}