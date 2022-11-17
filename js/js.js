const burger = document.querySelector ("#burgerz");
const menu = document.querySelector ("#menuz")

burger.addEventListener ("click", () =>{
    menu.classList.toggle ("disp");
});