/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * 01 SelectNodes.md
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...
let allItems = document.getElementsByClassName('item');


/**
 * @task
 * Select the main container by the id of "main"
 * Store it in the main constant
 * Example: const main = <Your code>
 * */

// Your code goes here
const main = document.getElementById('main');


/**
 * @task
 * Select the favorites container by id of "favs"
 * Store it in the favs constant
 * Example: const favs = <Your code>;
 */

// Your code goes here
const favs = document.getElementById('favs');


/**
 * @task
 * Create the updateCollections(id, direction) function that follows the list of requirements:
 * Takes an argument of the item id (number)
 * Take an argument of direction as a string value of 'toMain' or 'toFavs'
 * Moves the element from the current parent to the new parent (from main to favs or vice versa)
 * Changes the icon of the element: fa-heart-circle-plus for main, fa-heart-crack for favs items.
 */

// Your code goes here
function updateCollections(id, direction) {
    //accept item ID 
    //direction is to favs or to main
    //change icon accordingly
    let elementID = document.getElementById(id); 
    let icon = document.querySelector(`[id='${id}'] .fa-solid`);

    if (direction === 'toMain' || direction === 'toFavs') {
        
        if (direction === 'toFavs') {
            let target = document.getElementById('favs');
            let home = document.getElementById( elementID.parentElement.id);

            icon.classList.remove('fa-heart-circle-plus');
            icon.classList.add('fa-heart-crack');

            // elementID.classList.remove('fa-heart-circle-plus');
            // elementID.classList.add('fa-heart-crack');

            home.removeChild(elementID);
            target.appendChild(elementID);
        } else {
            let target = document.getElementById('main');
            let home = document.getElementById( elementID.parentElement.id);

            icon.classList.remove('fa-heart-crack');
            icon.classList.add('fa-heart-circle-plus');
            // elementID.classList.remove('fa-heart-crack');
            // elementID.classList.add('fa-heart-circle-plus');

            home.removeChild(elementID);
            target.appendChild(elementID);
        }
    }
    else {
        console.log('Error: Invalid direction. Check function input.');
    }

    
}


/**
 * @task
 * Iterate through the every item in allItems NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Get the current item's parent id ('main' or 'favs')
 * * Get the current item id (a number value)
 * * Set the direction constant to be equal to 'toFavs' or 'toMain', based off the current location
 * * The direction means the collection to move the item into, when the item is clicked
 * * If the correct item's location is the parent of id 'main' -> the direction is 'toFavs'
 * * If the correct item's location is the parent of id 'favs' -> the direction is 'toMain'
 * * Make the updateCollections function call, assign the item Id and the direction defined above
 */

// Your code goes here...
let itemList = Array.from(allItems);

for (const item of itemList) {
    if (item.parentElement.id === 'main') {
        item.addEventListener("click", () => {
            updateCollections(item.id, 'toFavs');
        });   
    }
    if (item.parentElement.id === 'favs') {
        item.addEventListener("click", () => {
            updateCollections(item.id, 'toMain');
        });   
    }
}



