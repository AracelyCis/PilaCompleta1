let stars = Array.from(document.querySelectorAll("i"));

stars.forEach((element) =>{
  element.addEventListener("click", (e)=>{
    rate(element);
  });
  element.addEventListener("mouseover",(e)=>{
    rate(element);
  });

});

function rate(element){
  stars.forEach((el)=>{
      el.classList.remove("selected");
  });
  selectedRating = stars.indexOf(element);
  for(let i=0; i<= selectedRating; i++){
    stars[i].classList.add("selected");
  }
}