'use strict'

function addData(data) {
    const p = document.createElement("p");
    p.textContent = data[0].title + ' $' + data[0].price;
    const adddata = document.getElementById("imagehere");
    const adddata2 = document.getElementById("titleprice");
    const itemimg = document.createElement("IMG"); 
    itemimg.src = data[0].images[0]; 
    itemimg.width = "200";
    itemimg.id = "imagehere";
    p.id = "titleprice";
    adddata.replaceWith(itemimg);
    adddata2.replaceWith(p);
}

function getData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => addData(data))
        .catch(error => console.error(error));
}

function callServer(event) {
    event.preventDefault();
    let textboxcontents = document.getElementById('textbox_id').value;
    const url = `https://api.escuelajs.co/api/v1/products?title=${textboxcontents}`;
    getData(url);
}

/*
* Add event listener on link
*/
document.addEventListener('DOMContentLoaded', () => {
    const directlink = document.getElementById('direct');
    directlink.addEventListener('click', callServer);
});

