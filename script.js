function toggleMenu(){
    
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

generateFact();

async function generateFact(){
    try{
        const response = await fetch('https://meowfacts.herokuapp.com/');
        if(!response.ok){
            throw new Error("could not fetch resource");
        }
        const data = await response.json();
        let factText = data.data[0];
        document.getElementById("fact-text").innerHTML = factText;
    }
    catch(error){
        console.error(error);
    }
}