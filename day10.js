
// const add = document.querySelector(".addition");
// const sub = document.querySelector(".subtract");
// const resetCount = document.querySelector(".reset");
const count = document.querySelector(".count");
 const buttons = document.querySelector(".buttons");


    buttons.addEventListener("click", (e)=>{
        if(e.target.classList.contains("addition")){
            count.innerHTML++;
            setColor();
        }
        if(e.target.classList.contains("subtract")){
            count.innerHTML--;
            setColor();
        }
        if(e.target.classList.contains("reset")){
            count.innerHTML = 0;
            setColor();
        }
    });

    function setColor(){
        if (count.innerHTML > 0){
            count.style.color = "white";
        }
        else if (count.innerHTML < 0){
            count.style.color = "red";
        }
        else{
            count.style.color = "black"
        }
    }







    // add.addEventListener('click', ()=> {
    //     count.innerHTML++;
    // });

    // resetCount.addEventListener('click', ()=> {
    //     count.innerHTML = 0;
    // });

    // sub.addEventListener('click', ()=> {
    //     count.innerHTML--;
    // });
