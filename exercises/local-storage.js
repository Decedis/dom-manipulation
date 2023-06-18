/**
 * LOCAL STORAGE AND DOM MANIPULATION
 * In this task you will write some functions to let the browser save
 * some of your actions results and retrieve them when the page is reloaded.
 * You will be working with the localStorage.
 * Make sure to read the following exercise-info file/files before you start
 * * 03 LocalStorage.md
 * * 04 EventDelegation.md
 * Local Storage might be shortened to "LS" in the comments beneath.
 * @requirement
 * Event delegation MUST be used
 */
const LS = localStorage;
if (!LS.getItem('favorites')) {
    LS.setItem('favorites', JSON.stringify([]));
}

/**
 * @task
 * Implement the 'click' event that solves several tasks by the item click:
 * * If the item is NOT in favorites LS and has white background color
 * * * Changes the color of the box to red
 * * * Add the item's id to the local storage
 * * Else if the box is in favorites LS and has white red color
 * * * Changes the color of the box to white
 * * * Add the item's id to the local storage
 * * Make all the items that are listed in the favorites LS save the red background color when the page is reloaded
 */

let favorites = JSON.parse(LS.getItem('favorites')); //should be an array
//recover card state
let cardList = document.querySelectorAll('.card');
cardList.forEach((card) => {
    if (favorites.includes(card.id)) {
        card.style.background = 'red';
    }
});

function addFavorite(cardData) {
    if (!favorites.includes(cardData.id)) {
        // LS.setItem('favorites', JSON.stringify()) //send to favs in data struct
        favorites.push(cardData.id);
        console.log('Variable favorites, ', favorites);
    }
    LS.setItem('favorites', JSON.stringify(favorites));
}

function removeFavorite(cardData) {
    if (favorites.includes(cardData.id)) {
        // LS.setItem('favorites', JSON.stringify()) //send to favs in data struct
        let idLocation = favorites.indexOf(cardData.id);
        favorites.splice(idLocation, 1);
        console.log('Variable favorites, ', favorites);
    }
    LS.setItem('favorites', JSON.stringify(favorites));
}


const itemEvent = (event) => {
    const card = event.target // what is clicked returns element value, this is the item
    // console.log(card); //testing 
    if (Array.from(card.classList).includes('card')) {
        //list includes this item? then => 
        if (card.style.background === 'white' || !card.style.background) {
            card.style.background = 'red';
            addFavorite(card);
        }
        else if((card.style.background === 'red' || !card.style.background)){
            card.style.background = 'white';
            removeFavorite(card);
        }
    }
};

const container = document.querySelector('.cardsContainer');
container.addEventListener('click', itemEvent);


/**
 * @hint
 * Here is a plan of how you can structure your code. You can follow it or choose your own way to go
 * * Select the container that holds all the items
 * * Create a function that sets the background to be red for the item with an id listed in favorites LS
 * * Run this function
 * * Create a function that adds an id to favorites LS by id passed as an argument
 * * Create a function that deletes an id from favorites LS by id passed as an argument
 * * Create a callback function that updates the element background color and does the
 * * /~/ action with the item's id depending on if it is in LS or not. The function should
 * * /~/ do that to a specific item that has a specific class value
 * * add the event listener to the container, pass the callback.
 */

// Your code goes here...

/*
- querySelect All cards into an array 
- map each element into their own ID value
- for each element, check if their background == white or red
- if white = unselected
- if red = favorite
- Upon each click event, update the localStorage
*/

