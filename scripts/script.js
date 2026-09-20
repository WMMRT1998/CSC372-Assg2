/*const test = document.getElementById('wedding');
test.addEventListener('click', addBorders);
var flag = 0;

function addBorders(event) {
    if(flag === 0){
        const img = event.currentTarget;
        img.style.border = "5px solid black" ;
        flag = 1
    }

    else{
        const img = event.currentTarget;
        img.style.border = "none" ;
        flag = 0
    }
}*/


const cards = document.querySelectorAll('.event-card');
for (const card of cards){
    card.addEventListener('click', onClick)
    var flag = 0;
    function onClick(event){
        if(flag === 0){
        const img = event.currentTarget;
        img.style.border = "5px solid black" ;
        flag = 1
    }

    else{
        const img = event.currentTarget;
        img.style.border = "none" ;
        flag = 0
    }

    }
}