function generateGrid( size ) {
    const container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < size; i++) {
        const div = document.createElement('div');
        div.id = 'grid-row';
        for (let j = 0; j < size; j++) {
            const div2 = document.createElement('div');
            div2.id = 'grid-cell';
            div2.addEventListener('mouseover', () => {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                div2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            });
            div.appendChild(div2);
        }
        container.appendChild(div);
    }
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    const cells = document.querySelectorAll('#grid-cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});

const generate = document.querySelector('#generate');
generate.addEventListener('click', () => {
    const dimensions = document.querySelector('#dimensions');
    generateGrid(dimensions.value);
});

generateGrid(4);