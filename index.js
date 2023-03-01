var numberOfDrumButtons = document.querySelectorAll("button").length

for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        alert("Hey! I got clicked")
    })
}
