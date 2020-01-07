const sessionInfo = JSON.parse(sessionStorage.getItem("SessionName"));
const firstname = document.querySelector('input[name="first"]');
const lastname = document.querySelector('input[name="last"]');
const fromDateDiv = document.querySelector('#fromMth');
const toDateDiv = document.querySelector('#toMth');
const yearDiv = document.querySelector('#year');
const gender = document.querySelector('input[name="gender"]');
const dob = document.querySelector('input[name="dob"]');
const ddl = document.createElement("SELECT");

const fromDateddl = document.createElement("Select");
const toDateddl = document.createElement("Select");
const yearddl = document.createElement("Select");

var months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var years = ['2018', '2019', '2020'];

document.querySelector("#welcome-msg").innerHTML = "Welcome " + sessionInfo.username;


const url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/" + encodeURIComponent(sessionInfo.customerId) + "/details";

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
            firstname.value = data.firstName;
            lastname.value = data.lastName;
            gender.value = data.gender;
            var date = new Date(data.dateOfBirth);
            dob.value = date;

        })
    } else {
        var error = new Error(reponse.statusText)
        error.reponse = response
        console.log("error1")
    }

});

const url1 = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/" + encodeURIComponent(sessionInfo.customerId);

fetch(url1, {
    method: "GET",
    headers: {
        "identity": "T43",
        "token": "59368b55-3271-4dd8-821b-4f1a08fc36f5"

    }
}).then(response => {
    if (response.ok) {
        response.json().then(data => {
            console.log(data)
            document.getElementById("accounts").appendChild(ddl);
            data.forEach(account => {
                const option = document.createElement("option");
                option.text = account.displayName;
                ddl.appendChild(option);
            });


        })
    } else {
        var error = new Error(reponse.statusText)
        error.reponse = response
        console.log("error1")
    }

});


months.forEach((mth) => {
    const fromDateoption = document.createElement("option");
    const toDateoption = document.createElement("option");
    fromDateoption.text = mth;
    toDateoption.text = mth;
    fromDateddl.appendChild(fromDateoption);
    toDateddl.appendChild(toDateoption);


})


years.forEach((year) => {
    const yearOption = document.createElement("option");
    yearOption.text = year;
    yearddl.appendChild(yearOption);


})

fromDateDiv.appendChild(fromDateddl);
toDateDiv.appendChild(toDateddl);
yearDiv.appendChild(yearddl);