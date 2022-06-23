const gen = document.querySelector(".generator");
const btn = document.querySelector(".btn");

const random = () => {
    //RandomNumber generator
    const randomNum = Math.floor(Math.random() * 10 + 1);
    gen.innerHTML = randomNum;
}
btn.addEventListener('click', random);
