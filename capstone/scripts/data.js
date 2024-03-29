// Call the "getSystems()" function in such a way that when the page loads, the "system" select element displays the three sytems 
// whose parentID is zero.
let firstLoad = true;
window.addEventListener("load", () =>{
    getSystems()
})
    
    
    // This function will accept two arguments (see week three): the parentID and the DOM element that will ultimately receive the data. 
    // Code this function as an asynchronous operation that will fetch data from the data.json file (see week three).
    // After receiving the JSON data, the asynchronous promise should use a higher order array method (see week two) to return only 
    // those items from the JSON that have the matching parentID. That promise should then call a function that passes two parameters, 
    // this new array and the DOM element to the "populateDD" function (below).

    // Note that although a number being passed as a parameter into a function may look like a numeral, it may be a string value 
    // instead, and may need to be converted to an integer. 
async function getSystems(v, e) {
    const response = await fetch("http://192.168.1.235:8080/data.json")
    const data = await response.json()
    const sysArr = data.systems.filter((e) => (e.parentID == 0));
    
    populateDD(sysArr, document.querySelector("#system"));

    const subSysArr = data.systems.filter((e) => (e.parentID == v));
    if (firstLoad == false){
        if (e.childElementCount == 0){
            for (var i = 0; i < subSysArr.length; i++){
                const newOpt = document.createElement("option");
                newOpt.textContent = subSysArr[i].sysName;
                e.appendChild(newOpt);
            }
        }
    }
}
// This function receives the array and DOM element from the "getSystems()" function (above). This function should fill the 
// appropriate DOM element with options from which the user can select. However, since that DOM element has an "onChange" event, this
// function first needs to add an option that says "Select an Item". Then use a looping mechanism (week one) to create the rest of  
// the select element's options using the sysName and sysID from the passed in array (see week five).

function populateDD(arr, e) {
    if (e.childElementCount == 0){
        const initOpt = document.createElement("option");
        initOpt.textContent = "Select an Item";
        e.appendChild(initOpt);

        for (var i = 0; i < arr.length; i++){
            const newOpt = document.createElement("option");
            newOpt.textContent = arr[i].sysName;
            newOpt.value = arr[i].sysID;
            e.appendChild(newOpt);
        }
    }
}
   

document.querySelector("#system").addEventListener("change", () =>{
    const subSysElements = [...document.querySelector("#subSystem").querySelectorAll("option")];

    for(var i = 0; i < subSysElements.length; i++){
        subSysElements[i].remove();
    }
    firstLoad = false;
    getSystems(document.querySelector("#system").value, document.querySelector("#subSystem"));
})


//document.querySelector("#system")
//document.querySelector("#subSystem")