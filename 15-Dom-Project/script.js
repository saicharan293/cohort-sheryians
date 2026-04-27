
function openFeatures(){
    let allElems = document.querySelectorAll(".elem");
    let allBackButtons = document.querySelectorAll(".fullElem .back");
    let allFullElems = document.querySelectorAll('.fullElem');

    allElems.forEach(function(elem){
        elem.addEventListener("click", function(){
            allFullElems[elem.id].style.display = 'block';
        })
    })

    allBackButtons.forEach(function(back) {
        back.addEventListener("click", function(){
            console.log(back.id);
            allFullElems[back.id].style.display = 'none';
        })
    });
}

openFeatures();