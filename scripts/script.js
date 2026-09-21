

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
const summaryHeader = document.createElement('h2');

summaryHeader.textContent = 'Summary of Saved Events'
noSaved.textContent = 'There is no events saved'

const page = document.querySelector('body');
page.insertBefore(summary, page.querySelector('footer'));
summary.appendChild(summaryHeader);
summary.appendChild(noSaved);
summary.appendChild(list1);
let summaryCounter = 0; //this is a flag that i will use to check how many events are saved


const cards = document.querySelectorAll('.event-card');
for (const card of cards){

    /*
        This part of the code was made cause i wanted to get the data from each card in this loop
        but i had never made id's or classes for each part. In the rules, i am not to alter the html or css at all
        so I couldn't just add it to the original code. However, i always used h3 for event name
        and 1st p was date/time, and 2nd p was always location.
        So this section creates event details, which stores all the tags, i can then create a variable
        for 1st and 2nd p element, and one for h3 title element, and finally can create a list item with
        all this information combined. That list item can then be added and removed easily. Because this
        is in the for loop, it is created for each event card, so i only have to do code once    
    */ 
    const eventDetails = card.querySelectorAll('p');
    let eventName = card.querySelector('h3').innerText; 
    let eventDate = eventDetails[0].innerText;
    let eventLocation = eventDetails[1].innerText;

    const eventItem = document.createElement('li');
    eventItem.textContent = eventName + ", " + eventDate + ", " + eventLocation;
    
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
        list1.appendChild(eventItem);
        summary.removeChild(noSaved); //if something is added, this should always be removed

    }

    else{
        const img = event.target.parentElement;
        img.style.border = "none" ;
        flag = 0
        button.textContent = 'Save This';
        summaryCounter--;
        
        list1.removeChild(eventItem);

        //This check is to see how many events are saves, if none, it brings back no saved text
        if (summaryCounter === 0){
            summary.appendChild(noSaved);
        }
    }

    }
}