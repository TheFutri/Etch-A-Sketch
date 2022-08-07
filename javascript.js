const amountOfGrid = 4;

const container = document.querySelector('.container');

const createGrid = (amountOfGrid) => {
    for(let i = 0; i<amountOfGrid; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row') // adding to a class so I can style the above line.

        for(let j = 0; j<amountOfGrid; j++){
            const widthHeight = 960 / amountOfGrid;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthHeight}px`;
            gridBox.style.height = `${widthHeight}px`;

            //add listener
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'yellow';
            })
            row.appendChild(gridBox);
        }
        container.appendChild(row);
    }
}

createGrid(amountOfGrid);