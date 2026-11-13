 function createName(){
    const month = document.getElementById("month").value;
    const age = Number(document.getElementById("age").value);
    const color = document.getElementById("color").value;

    let name1 = "";
    let name2 = " " + color + " ";
    let name3 = "";
   
    if (age <= 20) {
       name1 = "lil";
    } else if(age > 20 && age < 40) {
       name1 = "little";
    } else {
       name1 = "big";
    }



    if (month == "January") {
      name3 = "boots";
    } else if (month == "February") {
       name3 = "heart";
    } else if (month == "March") {
       name3 = "earth";
    } else if (month == "April") {
       name3 = "rain";
    } else if (month == "May") {
       name3 = "flower";
    } else if (month == "June") {
       name3 = "gem";
    } else if (month == "July") {
       name3 = "fireworks";
    } else if (month == "August") {
       name3 = "college applications";
    } else if (month == "September") {
       name3 = "pumpkin";
    } else if (month == "October") {
       name3 = "ghost";
    } else if (month == "November") {
       name3 = "leaf";
    } else if (month == "December") {
       name3 = "candy cane";
    } 

    const createdname = "Your name is: " + name1 + name2 + name3;

    document.getElementById("result").textContent = createdname;
 }
 
 


