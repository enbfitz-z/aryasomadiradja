AOS.init();

window.addEventListener("scroll",function(){
let cards=document.querySelectorAll(".card");

cards.forEach(card=>{
let posisi=card.getBoundingClientRect().top;

if(posisi<window.innerHeight-100){
card.classList.add("fade");
}
});
});
