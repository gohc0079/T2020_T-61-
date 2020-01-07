const username = document.querySelector('input[name="user-name"]');
const password = document.querySelector('input[name="password"]');
const loginForm = document.querySelector('form');

const user = username.value;



loginForm.addEventListener('submit', (e) => {


    e.preventDefault();


    const user = username.value;

    const url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/" + encodeURIComponent(user);


    fetch(url, {
        method: "GET",
        headers: {
            "identity": "T43",
            "token": "59368b55-3271-4dd8-821b-4f1a08fc36f5"

        }
    }).then(response => {
        if (response.ok) {
            response.json().then(data => {
                console.log(data)
            })
        } else {
            var error = new Error(reponse.statusText)
            error.reponse = response
            console.log("error1")
        }

    });


})