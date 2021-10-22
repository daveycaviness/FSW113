const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to
 document.querySelector("#submit").addEventListener("click", function(){
    myArry = [
        ...document.querySelector('#lang0').value.split(" "),
        ...document.querySelector('#lang1').value.split(" "),
        ...document.querySelector('#lang2').value.split(" "),
        ...document.querySelector('#lang3').value.split(" "),
        ...document.querySelector('#lang4').value.split(" "),
        ...document.querySelector('#lang5').value.split(" "),
        ...document.querySelector('#lang6').value.split(" "),
        ...document.querySelector('#lang7').value.split(" ")
    ]
    chkLang(myArry);
});
// a single array using the spread operator. Call the chkLang() function, passing in 


function chkLang(langs) { 
    let result = langs.some((element, index) => (langs[index].toLowerCase() === lang.toLowerCase()));

    let obj = document.querySelector('#TestResult')
    if (result === true) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
};
