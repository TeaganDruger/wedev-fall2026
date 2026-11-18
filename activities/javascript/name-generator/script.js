 function createName(){
    const month = document.getElementById("month").value;
    const age = Number(document.getElementById("age").value);
    const color = document.getElementById("color").value;
// message.style.color = "green";
        // message.style.backgroundColor = "lightgreen";
    let name1 = "";
    let name2 = " " + color + " ";
    let name3 = "";

    let createdname = document.getElementById("result");
   
    if (age <= 20) {
       name1 = "lil";
    } else if(age > 20 && age < 40) {
       name1 = "little";
    } else {
       name1 = "big";
    }



    if (month == "January") {
      name3 = "boots";
      createdname.style.color = "rgb(255, 0, 0)";
      createdname.style.backgroundColor = "rgb(255, 217, 217)";
    } else if (month == "February") {
       createdname.style.color = "rgb(255, 127, 0)";
       createdname.style.backgroundColor = "rgb(255, 236, 217)";
       name3 = "heart";
    } else if (month == "March") {
       createdname.style.color = "rgb(255, 255, 0)";
       createdname.style.backgroundColor = "rgb(255, 255, 217)";
       name3 = "earth";
    } else if (month == "April") {
       name3 = "rain";
       createdname.style.color = "rgb(127, 255, 0)";
       createdname.style.backgroundColor = "rgb(236, 255, 217)";
    } else if (month == "May") {
       name3 = "flower";
       createdname.style.color = "rgb(0, 255, 0)";
       createdname.style.backgroundColor = "rgb(217, 255, 217)";
    } else if (month == "June") {
       name3 = "gem";
       createdname.style.color = "rgb(0, 255, 127)";
       createdname.style.backgroundColor = "rgb(217, 255, 236)";
    } else if (month == "July") {
       name3 = "fireworks";
       createdname.style.color = "rgb(0, 255, 255)";
       createdname.style.backgroundColor= "rgb(217, 255, 255)";
    } else if (month == "August") {
       name3 = "college applications";
       createdname.style.color = "rgb(0, 127, 255)";
       createdname.style.backgroundColor = "rgb(217, 236, 255)";
    } else if (month == "September") {
       name3 = "pumpkin";
       createdname.style.color = "rgb(0, 0, 255)";
       createdname.style.backgroundColor = "rgb(217, 217, 255)";
    } else if (month == "October") {
       name3 = "ghost";
       createdname.style.color = "rgb(127, 0, 255)";
       createdname.style.backgroundColor = "rgb(236, 217, 255)";
    } else if (month == "November") {
       name3 = "leaf";
       createdname.style.color = "rgb(255, 0, 255)";
       createdname.style.backgroundColor = "rgb(255, 217, 255)";
    } else if (month == "December") {
       name3 = "candy cane";
       createdname.style.color = "rgb(255, 0, 127)";
       createdname.style.backgroundColor = "rgb(255, 217, 236)";
    } 

    createdname = "Your name is: " + name1 + name2 + name3;

    document.getElementById("result").textContent = createdname;
 }
 
//  let message = document.getElementById("message"); message.textContent
 


// add a background color and a font color dependent on month