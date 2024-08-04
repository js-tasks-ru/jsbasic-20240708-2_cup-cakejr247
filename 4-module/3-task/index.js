function highlight(table) {
  let rows = table.querySelectorAll('tbody tr');

  for (let row of rows) {
    let cells = row.getElementsByTagName('td');
    let hasDataAvailable = false;

    for (let i=0; i < cells.length; i++) {
        let cell=cells[i];

        switch(i) {
            case 0: 
                break;
            case 1: 
                if (parseInt(cell.textContent) < 18) {
                    row.style.textDecoration = 'line-through';
                }
                break;
            case 2:
                if (cell.textContent === 'm') {
                    row.classList.add('male');
                } else if (cell.textContent === 'f') {
                    row.classList.add('female');
                }
                break;
            case 3:
                if (cell.hasAttribute('data-available')) {
                    hasDataAvailable = true;
                    let isAvailable = cell.getAttribute('data-available');
        
                    if (isAvailable === "true") {
                        row.classList.add('available');
                    } else if (isAvailable === "false") {
                        row.classList.add('unavailable');
                    }
                }
                break;
        }      
    }
    if (!hasDataAvailable) {
        row.hidden = true;
    }
}
}