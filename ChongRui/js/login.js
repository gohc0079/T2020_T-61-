const username = document.querySelector('input[name="user-name"]');
const password = document.querySelector('input[name="password"]');
const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = username.value;

    if (user === "MaryTan") {
        console.log("Success");

    }



})