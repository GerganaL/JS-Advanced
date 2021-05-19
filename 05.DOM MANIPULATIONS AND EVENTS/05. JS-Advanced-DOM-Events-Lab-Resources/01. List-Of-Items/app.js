function addItem() {
     //create new <li> element

     const liElement = document.createElement('li');
     //set text of new element to input value
     liElement.textContent  = document.getElementById('newItemText').value;
 
     //select list from page and append new element to list
     document.getElementById('items').appendChild(liElement);
 
     //clean the field 
     document.getElementById('newItemText').value = '';
}