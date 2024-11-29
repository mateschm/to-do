let lists = (() => {
    if (!localStorage.getItem("lists")) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem("lists"));
    }
})();

showLists();

document.querySelector(`.lists`).addEventListener(`click`, showLists);


function addNewList() {
    const listName = prompt(`Enter name of the list`);
    lists.push(listName);
    localStorage.setItem("lists", JSON.stringify(lists));
    lists = JSON.parse(localStorage.getItem("lists"));
    showLists();
}

function showLists() {
    //clear lists
    document.querySelector(`.items`).innerHTML = ``;

    //add each list to lists view
    lists.forEach((item) => {
        const listItem = document.createElement(`div`);
        listItem.textContent = `${item}`;
        document.querySelector(`.items`).appendChild(listItem);
    });

    //add button for adding a list
    const addListButton = document.createElement(`div`);
    addListButton.setAttribute(`class`, `add-list`);
    addListButton.textContent = `+Add a new list`
    document.querySelector(`.items`).appendChild(addListButton);
    document.querySelector(`.add-list`).addEventListener(`click`, addNewList);
}

function List() {
    
}