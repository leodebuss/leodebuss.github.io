let zipElement = document.querySelector("#zipCode");
zipElement.addEventListener("change", dispCity);

dispState();
async function dispState() {
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error ")
        }
        const data = await response.json();
        console.log(data);

        for (let i of data) {

            let optionEl = document.createElement("option");
            optionEl.textContent = i.state;
            optionEl.value = i.usps;

            document.querySelector("#state").append(optionEl);
        }
        
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network Failure)");
        } else {
            alert(err.message);
        }
    }

}

async function dispCity() {
    let zipCode = document.querySelector("#zipCode").value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    document.querySelector("#city").textContent = data.city;
}