/*Variables*/
const Menu = document.querySelector("#Menu");
const Menu_Button = document.querySelector("#Menu_Button");
const Menu_Button0 = document.querySelector("#Menu_Button0");
const Donar = document.querySelector("#Donar")
const Art = document.querySelector("#Art")

/*Funciones*/
Menu_Button.addEventListener("click", () =>{
    Menu.classList.add("Menu_Visible");
    document.body.style.overflow = 'hidden';
})

Menu_Button0.addEventListener("click", () =>{
    Menu.classList.remove("Menu_Visible");
    document.body.style.overflow = 'auto'; 
})

Donar.addEventListener("click", () =>{
    Menu.classList.remove("Menu_Visible");
    document.body.style.overflow = 'auto';
})
Art.addEventListener("click", () =>{
    Menu.classList.remove("Menu_Visible");
    document.body.style.overflow = 'auto';
})