let elBody = document.querySelector("body");
let elforminp = document.querySelector(".form__inp");
let elherodesk = document.querySelector( ".hero__desk");

elforminp.addEventListener("change", () => {
    if (elforminp.checked){
        elBody.style.backgroundColor = "black";
        elherodesk.style.color = "white";
    }else{
        elBody.style.backgroundColor = "white" ;
         elherodesk.style.color = "black";
    }
});