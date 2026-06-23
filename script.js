document.addEventListener("mousemove", function(e){

    let x = e.clientX;
    let y = e.clientY;

    document.body.style.backgroundPosition =
    x/50 + "px " + y/50 + "px";

});
