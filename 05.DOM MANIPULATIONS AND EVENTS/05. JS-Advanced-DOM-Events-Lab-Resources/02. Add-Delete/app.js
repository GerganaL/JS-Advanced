function addItem() {
    
    const input = document.getElementById('newItemText');
    const liElement = createElement('li',input.value);

    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (event) =>{
       event.target.parentNode.remove();
    })
    liElement.appendChild(deleteBtn);
  
    document.getElementById('items').appendChild(liElement);
    input.value = '';

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}


// function remove() {
//     const liElement = document.getElementById('li-to-delete');

//     liElement.parentNode.removeChild(liElement);
// }