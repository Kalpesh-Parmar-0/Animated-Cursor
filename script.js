let smallCursor = document.querySelector(".smallCursor");

document.addEventListener('mousemove', function(eventObj){
    smallCursor.style.left = eventObj.clientX + "px"
    smallCursor.style.top = eventObj.clientY + "px"
    console.log(eventObj)
})