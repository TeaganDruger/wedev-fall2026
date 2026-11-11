function create(){
    //gets value typed into input box by the user
    const noun1 = document.getElementById("nounInput1").value; //.value gets the value put into the box
    const noun2 = document.getElementById("nounInput2").value;
    const name1 = document.getElementById("nameInput1").value;
    const noun3 = document.getElementById("nounInput3").value;
    const noun4 = document.getElementById("nounInput4").value;
    const noun5 = document.getElementById("nounInput5").value;
    const adv1 = document.getElementById("adverbInput1").value;
    const exclaim1 = document.getElementById("exclaimInput1").value;
    const verb1 = document.getElementById("verbInput1").value;
    const adj1 = document.getElementById("adjInput1").value;
    const number1 = document.getElementById("numberInput1").value;
    const name2 = document.getElementById("nameInput2").value;
    const adj2 = document.getElementById("adjInput2").value;
    const verb2 = document.getElementById("verbInput2").value;
    const verb3 = document.getElementById("verbInput3").value;
    const noun6 = document.getElementById("nounInput6").value;
    const noun7 = document.getElementById("nounInput7").value;
    const part1 = document.getElementById("partInput1").value;
    const verb4 = document.getElementById("verbInput4").value;

    //create story
    const story = "I was going to be rich! I had just invented the first electric " + noun1 + ". Using a " + noun2 + " from " + name1 + "'s toolbox, I built it out of old " + noun3 + ", metal " + noun4 + ", and rubber " + noun5 +". The first time I turned it on, the machine worked " + adv1 + ". I couldn't believe it! '" + exclaim1 + "!' I yelled, " + verb1 + " up and down. I invited a(n) " + adj1 + " billionaire to check out my invention. I couldn't wait to sell it for " + number1 + " million dollars and live like " + name2 + ". But when I turned it on, something went terribly " + adj2 + ". The machine started " + verb2 + " and began to " + verb3 + ". Suddenly it spewed " + noun6 + " and shot slices of " + noun7 + " in all directions. The billionaire started screaming at the top of his " + part1 + " and " + verb4 + " out of my lab. Good thing I still get my weekly allowance."; 

    //print story on webpage
    document.getElementById("madlib").textContent = story;
}