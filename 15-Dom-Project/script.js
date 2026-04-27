let allElems = document.querySelectorAll(".elem");

allElems.forEach(function(elem){
    elem.addEventListener("click", function(){
        document.querySelectorAll('.fullElem')[elem.id].style.display = 'block';
    })
})