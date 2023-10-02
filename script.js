let boton = document.querySelector("#tema");
let body = document.querySelector("body");
let darkMode = false;
boton.addEventListener("click",()=>{
    if (darkMode == false){
        body.style.backgroundColor = "black";
        darkMode = true;
    }else{
        body.style.backgroundColor = "white";
        darkMode = false;
    }
})

let textos = document.querySelectorAll(".titulo-fotos")

        // body.style.backgroundColor = "black";
        // for (let i = 0; i < textos.length; i++){
        //     textos[i].style.color = "white";
        // }