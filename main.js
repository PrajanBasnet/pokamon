const pkName = document.querySelector("#pokamonName");
const output = document.querySelector(".output");
const myAbility = document.querySelector(".ability");
const img = document.querySelector("#myimg");

async function pokamon(){
    try{
        

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkName.value}`);
    const data = await response.json();
    output.innerHTML = `Name of pokamon:  ${data.name} <br> Height of pokemon: ${data.height}` ;  
    let dta = data.abilities;

    let ablt = []
    for (let i = 0; i < dta.length; i++) {
        ablt.push(data.abilities[i].ability.name);
        
        myAbility.innerHTML = `Abilities:  ${ablt}`;
        

    }
    img.src = data.sprites.front_default;
    console.log(data);
    
    }catch(error){
        output.innerHTML = `` ;  
        img.src = "";
        myAbility.innerHTML = ``;
        console.error("Error occured :" + error.message);
    }
}
