function focused() {
    //select all input fields
    Array.from(document.querySelectorAll('input')).forEach(i => {
          //add listener for focus event
        i.addEventListener('focus', onFocus);
            //add listener for blur event
        i.addEventListener('blur', onBlur);
    });
  
   

 //onfucus -> select input parent -> apply class 'focused'
    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
    }
 //onBlur -> select input parent -> remove class 'focused'
    function onBlur(ev) {
        ev.target.parentNode.className = '';
    }
}