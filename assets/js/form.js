// TODO: Create a variable that selects the form element
const formElement = document.getElementById('form');
const submitButton = document.getElementById('submit');
const usernameInput = document.getElementById('username');
// const usNaInput = document.querySelector('#username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const errorMessage = document.getElementById('error');


// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSubmission(event) {
    event.preventDefault();
    const usernameTxt = usernameInput.value;
    const titleTxt = titleInput.value;
    const contentTxt = contentInput.value;
    //console.log(uName);
    // tempStorageObject.push({
    //     text: uName,
    // });
    // console.log(usernameInput.value);
    // console.log(usNaInput.value);
    if (usernameInput.value !== '' &&
        titleInput.value !== '' &&
        contentInput.value !== '') {
            tempBlogPost = {
                username: usernameTxt,
                title: titleTxt,
                content: contentTxt,

            }
            storeLocalStorage(tempBlogPost);
            redirectPage('blog.html');
            
        }
        else {
            const textReplacement = "Please complete the form.";
            errorMessage.innerText = textReplacement;
        }

    }


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

submitButton.addEventListener('click', formSubmission);

