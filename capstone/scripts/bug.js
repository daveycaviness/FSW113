    // Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
    // This constructor should be set up to accept the four user-input values from index.html: 
    // reportedBy, system, subSystem, and bugDesc
class Bug {
    constructor(reportedBy, system, subSystem, bugDesc) {
        this.reportedBy = reportedBy
        this.system = system
        this.subSystem = subSystem
        this.bugDesc = bugDesc
        
    }

    addBug() {
        const wrapper = document.querySelector("#listWrapper");
        const newBug = document.createElement("div");
        const name = document.createElement("p");
        const userSys = document.createElement("p")
        const problem = document.createElement("p")
        const delBtn = document.createElement("button")
        const checkBtn = document.createElement("button")

        name.textContent = `Reported By: ${this.reportedBy}`;
        userSys.textContent = `System: ${this.system} / ${this.subSystem}`;
        problem.textContent = this.bugDesc;
        delBtn.innerHTML = "X";
        checkBtn.innerHTML = "&check;";
        newBug.style = "background-color: #c2c1c9";
        
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below).
        wrapper.appendChild(newBug);
        newBug.appendChild(name);
        newBug.appendChild(userSys);
        newBug.appendChild(problem);
        newBug.appendChild(delBtn);
        newBug.appendChild(checkBtn);
       
        delBtn.addEventListener("click", () =>{
            this.deleteBug(newBug);
        })

        checkBtn.addEventListener("click", () =>{
            this.resolveBug(newBug);
        })
         

    }
    // Create code that will remove the appropriate bug from the DOM. 
    // You may need to Google how to remove an element from the DOM.
    deleteBug(e) {
        e.remove();
        
    }
    // Create code that changes the appropriate bug report to a darker color
    resolveBug(e) {
        e.style = "background-color: black; color: white";
        
    }
}
// Create code that instantiates the Bug class with the data input by the 
// user in the index.html form. Then call the method to add the new bug report.
function reportBug() {
    const reported = document.querySelector("#reportedBy").value;
    const dept = document.querySelector("#system").selectedOptions[0].text;
    const subDept = document.querySelector("#subSystem").selectedOptions[0].text;
    const issue = document.querySelector("#bugDesc").value;
    const theBug = new Bug(reported, dept, subDept, issue);
    theBug.addBug();
}
