const Cells = document.querySelectorAll('[data-cell]');

Cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
});

function handleClick(e) {
    console.log('you have clicked me');
}