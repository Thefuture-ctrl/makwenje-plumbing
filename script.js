const burger = document.querySelector("#burger");
const reset = document.querySelector("#reset");

const hiddenColTwo = () =>{
    const colTwo = document.querySelector(".column.two");
    colTwo.style.transform = ("translateX(-1000%)");
0%)");
    
}
hiddenColTwo()

burger.addEventListener("click",()=>{
    const colTwo = document.querySelector(".column.two");
    const colThree = document.querySelector(".column.three");
    colTwo.style.transform = ("translateX(0%)");
    colThree.style.display = ("none")
})
reset.addEventListener("click",()=>{
    const colTwo = document.querySelector(".column.two");
    const colThree = document.querySelector(".column.three");
    colTwo.style.transform = ("translateX(-100%)");
    colThree.style.display = ("grid");
  
})


