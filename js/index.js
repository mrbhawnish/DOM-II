let txtContent = document.querySelectorAll('.text-content');

//Change color to blue when hovered over both text-content  (MouseOver & mouseout events included)
Array.from(txtContent).forEach(text => {
     text.addEventListener('mouseover', function(e){
        text.style.color= "blue";
        e.stopPropagation();
     text.addEventListener('mouseout', function(){
        text.style.color= "initial";
       })
     })

})

//using resize evenet on first image to add opacity
let imgCont = document.querySelector("img");

window.addEventListener('resize', function(){
   imgCont.style.opacity += "0.5";
})

//click event below using stopPropagation to prevent further bubbling

let signUpBtn = document.querySelector('.btn');


document.addEventListener('click', function(e){
   signUpBtn.textContent = "double click me!";
   signUpBtn.style.background = "black";
    e.stopPropagation();
});


//double click event below
signUpBtn.addEventListener('dblclick', function(e){
    signUpBtn.textContent = "button double clicked!"
    signUpBtn.style.background = "cyan";

})

// Wheel Event fired while rolling the mouse wheel

let head = document.querySelectorAll("h2");
Array.from(head).forEach(heading => {
   heading.addEventListener('wheel', function(e){
      heading.style.color= "cyan";
      e.stopPropagation();
   })

})

//Select second button from content-pick

let contentPick = document.querySelector("h4");
contentPick.addEventListener('select', function(){
   contentPick.innerText = "<b> Fun in the Sun </b>"
})

// stop navigation items from refreshing the page

let navitems = document.getElementsByClassName("nav-link");
Array.from(navitems).forEach(item => {
item.addEventListener('click', function (event) {
   event.preventDefault();
   event.stopPropagation();
   return false;
 });
});

//press key down to see this event:


window.addEventListener("keydown", function keyFunc() {
 alert('key down pressed!')
})

//beforeunload event to make sure user wants to leave or stay



window.addEventListener("beforeunload", function(event) {
   event.returnValue = "Click leave to make sure";
 });

