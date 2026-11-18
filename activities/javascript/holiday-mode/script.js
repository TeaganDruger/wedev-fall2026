
// STEP 1: Track whether holiday mode is on
const pageTitle = document.getElementById("page-title");
const themeToggle = document.getElementById("theme-toggle");
const heading = document.getElementById("site-header");
const menuBox = document.getElementById("menu-box");
const footer = document.getElementById("site-footer");

// STEP 2: Create the function that runs when the button is clicked
themeToggle.addEventListener("click", () => {
    if(themeToggle.textContent == "Normal Mode"){
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "black";
        heading.style.backgroundColor = "#5593f6";
        menuBox.style.borderColor = "#5593f6";
        menuBox.style.backgroundColor = "#fffaf0";
        themeToggle.textContent = "Holiday Mode";
        themeToggle.style.backgroundColor = "white"
        pageTitle.textContent = "Sunny Side Bakery";
        pageTitle.style.color = "white";
        footer.style.backgroundColor = "#eeeeee"; 
    } else {
        document.body.style.backgroundColor = "#f0fff0";
        document.body.style.color = "#124917";
        heading.style.backgroundColor = "#ADEBB3";
        menuBox.style.borderColor = "#124917";
        menuBox.style.backgroundColor = "#FF6868";
        themeToggle.textContent = "Normal Mode"; 
        themeToggle.style.backgroundColor = "#f0fff0";
        pageTitle.textContent = "Sunny Side Bakery 🎄";
        pageTitle.style.color = "#A60000";
        footer.style.backgroundColor = "#FF6868";
    }    
})
    // STEP 3: get the button and the elements to change

    
    // STEP 4: if holiday mode wasn't on, turn it on


    // STEP 5: if holiday mode was on, turn it off




