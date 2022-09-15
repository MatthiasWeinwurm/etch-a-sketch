/*function removeGrid() {
    document.querySelector('#container').removeChild(document.querySelector('#grid'));
}*/

function paintGrid(length) {
    if (length > 100 || length < 1) {
        document.querySelector('#error').textContent = "Please enter a number between 1 and 100";
        return;
    } else {
        document.querySelector('#error').textContent = "";
    }

    const currentGrid = document.querySelector('#grid');
    if (currentGrid) document.querySelector('#container').removeChild(currentGrid);

    const grid = document.createElement('div');
    grid.id = "grid";

    grid.style.height = '960px';
    grid.style.width = '960px';
    grid.style.display = 'flex';
    grid.style.flexDirection = 'column';

    for (let i = 0; i < length; i++) {
        const divRow = document.createElement('div');
        for (let j = 0; j < length; j++) {
            const div = document.createElement('div');
            div.style.border = '1px solid black';
            div.style.display = 'inline-block';
            div.style.margin = '0';

            div.style.flexGrow = 1;

            div.addEventListener('mouseover', () => {
                if (!div.style.backgroundColor) {
                    div.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
                    //div.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.1)`;
                } else {
                    let background = div.style.backgroundColor.split(',')
                    let opacity = background.pop();
                    opacity = Number(opacity.substring(1, opacity.length-1));
                    let newOp = opacity + (1 - opacity) * 0.1;
                    div.style.backgroundColor = `${background.join(',')}, ${newOp})`;
                    console.log(div.style.backgroundColor);
                }
            });

            divRow.appendChild(div);
        }

        divRow.style.flexGrow = 1;
        divRow.style.display = 'flex';

        grid.appendChild(divRow);
    }

    document.querySelector('#container').appendChild(grid);
}

paintGrid(16);

const redraw = document.querySelector('#redraw');
redraw.addEventListener('click', () => paintGrid(document.querySelector('#length').value))