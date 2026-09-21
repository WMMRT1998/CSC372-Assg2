

//This was all test code just for me to check if my function worked on an individual card
//before adding to for loop

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
const summary = document.createElement('section');
const list1 = document.createElement('ul');
const noSaved = document.createElement('p');
noSaved.textContent = 'There is no events saved'

const page = document.querySelector('body');
page.appendChild(summary);
summary.appendChild(noSaved);
summary.appendChild(list1);
let summaryCounter = 0; //this is a flag that i will use to check how many events are saved


const cards = document.querySelectorAll('.event-card');
for (const card of cards){

    const button = document.createElement('button');
    button.style.width = '100px';
    button.style.height = '30px';
    button.textContent = 'Save This';
    
    card.appendChild(button);
    button.addEventListener('click', onClick)
    let flag = 0;
    function onClick(event){
        if(flag === 0){
        const img = event.target.parentElement;
        img.style.border = "5px solid black" ;
        button.textContent = 'Remove This';
        flag = 1
        summaryCounter++;

        summary.removeChild(noSaved); //if something is added, this should always be removed

    }

    else{
        const img = event.target.parentElement;
        img.style.border = "none" ;
        flag = 0
        button.textContent = 'Save This';
        summaryCounter--;

        //This check is to see how many events are saves, if none, it brings back no saved text
        if (summaryCounter === 0){
            summary.appendChild(noSaved);
        }
    }

    }
}