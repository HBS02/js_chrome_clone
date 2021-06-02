
const superEventHandler = document.getElementById("title");
superEventHandler.innerHTML = "hi from js";

 function handleResize(){
     superEventHandler.innerHTML = "You just resized!";
     superEventHandler.style.color = "violet";
     
 }

 function handlecontext(){
    superEventHandler.innerHTML = "That was a right click";
    superEventHandler.style.color = "red";
    
}
 function handleleaver(event){
    superEventHandler.innerHTML = "The mouse is gone";
    superEventHandler.style.color = "blue";
    
}
 function handleenter(event){
    superEventHandler.innerHTML = "The mouse is here";
    superEventHandler.style.color = "green";
    
}

 window.addEventListener("resize", handleResize);
 window.addEventListener("contextmenu", handlecontext);
 window.addEventListener("mousedown", handleleaver);
 window.addEventListener("mouseover", handleenter);


