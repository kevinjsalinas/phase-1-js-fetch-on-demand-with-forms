const init = () => {   //this is a function but inside a variable 

    const form = document.querySelector("form"); 

    form.addEventListener("submit", (e) => {    
    e.preventDefault();
    const input = document.querySelector("#searchByID");
    
    //console.log(input.value)

    fetch(`http://localhost:3000/movies/${input.value}`)
        .then ((response) => response.json())
        .then ((data) => {  
            const h4 = document.querySelector("h4");
            const p = document.querySelector("p");

            h4.innerText = data.title;
            p.textContent = data.summary;
        })
  
    })

}

document.addEventListener('DOMContentLoaded', init);