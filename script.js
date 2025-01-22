
const gridItems = document.querySelectorAll('.grid-item');
const clickHistory = [];

function changeColor(event) {
    event.target.style.backgroundColor = '#7A0000';
    clickHistory.push(event.target);
}

for (let i = 0; i < gridItems.length - 1; i++) {
    gridItems[i].addEventListener('click', changeColor);
}

const ninthBox = gridItems[8];

ninthBox.addEventListener('click', () => {
    if (clickHistory.length > 0) {
        const lastClicked = clickHistory.pop();
        lastClicked.style.backgroundColor = '#00407A';
    }
});


