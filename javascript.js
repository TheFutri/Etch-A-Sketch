const amountOfGrid = 4;

const container = document.querySelector('.container');
const resetButt = document.querySelector('button');

const createGrid = (amountOfGrid) => {
    const wrap = document.createElement('div');
    wrap.classList.add('wrap');

    for (let i = 0; i < amountOfGrid; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row') // adding to a class so I can style the above line.

        for (let j = 0; j < amountOfGrid; j++) {
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
        wrap.appendChild(row);
    }
    container.appendChild(wrap);
}

createGrid(amountOfGrid);

resetButt.addEventListener('click', () => {
    let userSize = Number(prompt('Gib dimentions: '));
    while (userSize > 100) {
        userSize = Number(prompt('Gib dimentions: '));
    }
    const wrap = document.querySelector('.wrap');
    wrap.remove();
    createGrid(userSize);
})
