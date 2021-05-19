function solve() {
  const textArea = document.querySelectorAll('textarea');
  const buttons = document.querySelectorAll('button');
  const body = document.querySelector('tbody');
  //create rows in the table for every furniture
  buttons[0].addEventListener('click', function (e) {
    const arr = JSON.parse(textArea[0].value);

    for (const el of arr) {
      let row = document.createElement('tr');

      const cellImage = document.createElement('td');
      const img = document.createElement('img');
      cellImage.appendChild(img);
      img.setAttribute('src', el.img);

      const cellName = document.createElement('td');
      const pName = document.createElement('p');
      pName.textContent = el.name;
      cellName.appendChild(pName);

      const cellPrice = document.createElement('td');
      const pPrice = document.createElement('p');
      pPrice.textContent = el.price;
      cellPrice.appendChild(pPrice);

      const cellDecor = document.createElement('td');
      const pDecor = document.createElement('p');
      pDecor.textContent = el.decFactor;
      cellDecor.appendChild(pDecor);

      const cellCheck = document.createElement('td');
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      cellCheck.appendChild(input);

      row.appendChild(cellImage);
      row.appendChild(cellName);
      row.appendChild(cellPrice);
      row.appendChild(cellDecor);
      row.appendChild(cellCheck);

      body.appendChild(row);
    }
  });

  //if checked make calculations

  buttons[1].addEventListener('click', function(e){
    const furniture = Array.from(body.querySelectorAll('input[type=checkbox]:checked'))
    .map(input => input.parentNode.parentNode);
    
    const result = {
      bought: [],
      totalPrice: 0,
      decFactorSum: 0
    }

    for (const row of furniture) {
        const cells = row.children;
        console.log(cells);

        const name = cells[1].children[0].textContent;
        result.bought.push(name);

        const price = Number(cells[2].children[0].textContent);
        result.totalPrice += price;

        const factor = Number(cells[3].children[0].textContent);
        result.decFactorSum += factor;
    }
    textArea[1].value = `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${(result.decFactorSum/furniture.length)}`;

  });

}