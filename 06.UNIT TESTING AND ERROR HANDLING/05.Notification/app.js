function notify(message) {
   let div = document.getElementById('notification');
   div.textContent = message;
   div.style.display = 'block';
   div.addEventListener('click', (e)=>{
      e.target.style.display = 'none';
   })
}

