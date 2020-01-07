const sessionInfo = JSON.parse(sessionStorage.getItem("SessionName"));
const firstname = document.querySelector('input[name="first"]');
const lastname = document.querySelector('input[name="last"]');
const fromDateDiv = document.querySelector("#fromMth");
const toDateDiv = document.querySelector("#toMth");
const yearDiv = document.querySelector("#year");
const gender = document.querySelector('input[name="gender"]');
const dob = document.querySelector('input[name="dob"]');
const ddl = document.createElement("SELECT");
const dataForm = document.querySelector("#dataForm");
const fromDateddl = document.createElement("Select");
const toDateddl = document.createElement("Select");
const yearddl = document.createElement("Select");

var months = [{
    name: "Jan",
    num: 0
  },
  {
    name: "Feb",
    num: 1
  },
  {
    name: "Mar",
    num: 2
  },
  {
    name: "April",
    num: 3
  },
  {
    name: "May",
    num: 4
  },
  {
    name: "June",
    num: 5
  },
  {
    name: "July",
    num: 6
  },
  {
    name: "Aug",
    num: 7
  },
  {
    name: "Sept",
    num: 8
  },
  {
    name: "Oct",
    num: 9
  },
  {
    name: "Nov",
    num: 10
  },
  {
    name: "Dec",
    num: 11
  }
];
var years = ["2018", "2019", "2020"];

document.querySelector("#welcome-msg").innerHTML =
  "Welcome " + sessionInfo.username;

const url =
  "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/" +
  encodeURIComponent(sessionInfo.customerId) +
  "/details";

fetch(url, {
  method: "GET",
  headers: {
    identity: "T43",
    token: "59368b55-3271-4dd8-821b-4f1a08fc36f5"
  }
}).then(response => {
  if (response.ok) {
    response.json().then(data => {
      console.log(data);
      firstname.value = data.firstName;
      lastname.value = data.lastName;
      gender.value = data.gender;
      var date = new Date(data.dateOfBirth);
      dob.value = date;
    });
  } else {
    var error = new Error(reponse.statusText);
    error.reponse = response;
    console.log("error1");
  }
});

const url1 =
  "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/" +
  encodeURIComponent(sessionInfo.customerId);

fetch(url1, {
  method: "GET",
  headers: {
    identity: "T43",
    token: "59368b55-3271-4dd8-821b-4f1a08fc36f5"
  }
}).then(response => {
  if (response.ok) {
    response.json().then(data => {
      console.log(data);
      document.getElementById("accounts").appendChild(ddl);
      data.forEach(account => {
        const option = document.createElement("option");
        option.text = account.displayName;
        ddl.appendChild(option);
      });
    });
  } else {
    var error = new Error(reponse.statusText);
    error.reponse = response;
    console.log("error1");
  }
});

months.forEach(mth => {
  const fromDateoption = document.createElement("option");
  const toDateoption = document.createElement("option");
  fromDateoption.text = mth.name;
  fromDateoption.value = mth.num;
  toDateoption.text = mth.name;
  toDateoption.value = mth.num;
  fromDateddl.appendChild(fromDateoption);
  toDateddl.appendChild(toDateoption);
});

years.forEach(year => {
  const yearOption = document.createElement("option");
  yearOption.text = year;
  yearddl.appendChild(yearOption);
});

fromDateDiv.appendChild(fromDateddl);
toDateDiv.appendChild(toDateddl);
yearDiv.appendChild(yearddl);
var onemonth = [];


dataForm.addEventListener("submit", e => {
  e.preventDefault();
  selectedFromText = fromDateddl.options[fromDateddl.selectedIndex].value;
  selectedToText = toDateddl.options[toDateddl.selectedIndex].value;
  for (var i = selectedFromText; i <= selectedToText; i++) {
    onemonth.push(months[i].name);
  }

  console.log(onemonth);

  var year = 2018;
  var graphtype = "bar";

  var amount = [
    3904.11,
    3719.41,
    3854.22,
    4868.06,
    4032.32,
    3961.88,
    4159.88,
    4069.26,
    3981.35,
    4231.91,
    3838.48,
    4164.05
  ];
  var debit_amount = [
    3904.11,
    3719.41,
    3854.22,
    4868.06,
    4032.32,
    3961.88,
    4159.88,
    4069.26,
    3981.35,
    4231.91,
    3838.48,
    4164.05
  ];
  var credit_amount = [
    4004.11,
    3819.41,
    3954.22,
    5068.06,
    4232.32,
    4061.88,
    4359.88,
    4469.26,
    3881.35,
    4031.91,
    3638.48,
    4064.05
  ];

  var onemonth = ["jan"]
  var onecred = ["1234"];
  var onedebt = ["1567"];

  if (graphtype == "bar") {
    var trace1 = {
      type: "bar",
      name: "Debit",
      x: onemonth,
      y: onedebt,
      marker: {
        color: "#C8A2C8",
        line: {
          width: 2.5
        }
      }
    };

    var trace2 = {
      type: "bar",
      name: "Credit",
      x: onemonth,
      y: onecred,
      marker: {
        color: "#a4a2c8",
        line: {
          width: 2.5
        }
      }
    };
  } else {
    var trace1 = {
      type: "pie",
      labels: months,
      values: amount,
      marker: {
        color: "#C8A2C8",
        line: {
          width: 2.5
        }
      }
    };
  }

  var data = [trace1, trace2];

  var layout = {
    title: "Customer Transaction!" + year,
    font: {
      size: 18
    }
  };
});