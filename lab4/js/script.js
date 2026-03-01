let zipElement = document.querySelector("#zipCode");

zipElement.addEventListener("change", dispCity);
zipElement.addEventListener("change", dispLat);
zipElement.addEventListener("change", dispLon);
document.querySelector("#state").addEventListener("change", dispState);
document.querySelector("#password").addEventListener("click", dispPw);
document.querySelector("#password").addEventListener("change", signUpErr);
document.querySelector("#usernameTextBox").addEventListener("change", usernameAvailability);


dispState();
async function dispState() {
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);

        for (let i of data) {

            let optionEl = document.createElement("option");
            optionEl.textContent = i.state;
            optionEl.value = i.usps;

            document.querySelector("#state").append(optionEl);
        }
        dispCounty();

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network Failure)");
        } else {
            alert(err.message);
        }
    }

}

async function dispCity() {
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    document.querySelector("#city").textContent = data.city;
}

async function dispLat() {
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    document.querySelector("#latitude").textContent = data.latitude;
}

async function dispLon() {
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    document.querySelector("#longitude").textContent = data.longitude;
}

async function dispPw() {
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    let response = await fetch(url);
    let data = await response.json();
    document.querySelector("#suggestedPw").textContent = data.password;
}

async function dispCounty() {
    let countySel = document.querySelector("#state").value;
    let url = "https://csumb.space/api/countyListAPI.php?state=" + countySel;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);

        document.querySelector("#county").innerHTML = "";
        for (let i of data) {
            let optionEl = document.createElement("option");
            optionEl.textContent = i.county;
            document.querySelector("#county").append(optionEl);
        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network Failure)");
        } else {
            alert(err.message);
        }
    }
}

async function usernameAvailability() {
    let usernameAvailability = document.querySelector("#usernameTextBox").value;
    let url = "https://csumb.space/api/usernamesAPI.php?username=" + usernameAvailability;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);

        if(data.available) {
            document.querySelector("#usernameAvailability").textContent = "Username is Available!";
            document.querySelector("#usernameAvailability").style.color = "green";
        }
        else {
            document.querySelector("#usernameAvailability").textContent = "Username is NOT Available!";
            document.querySelector("#usernameAvailability").style.color = "red";
        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network Failure)");
        } else {
            alert(err.message);
        }
    }
}

async function signUpErr() {
    let password = document.querySelector("#password").value;
    if (password.length < 6) {
        document.querySelector("#signUpErr").textContent = "Error";
        document.querySelector("#signUpErr").style.color = "red";
    } else {
        document.querySelector("#signUpErr").textContent = "";
    }
}