const flexContainer = document.querySelector('.container');
const row = document.getElementById('row');
const rowReverse = document.getElementById('row-reverse');
const column = document.getElementById('column');
const columnReverse = document.getElementById('column-reverse');

row.addEventListener('click', () => {
  flexContainer.classList.toggle('row');
});

rowReverse.addEventListener('click', () => {
  flexContainer.classList.toggle('row-reverse');
});

column.addEventListener('click', () => {
  flexContainer.classList.toggle('column');
});

columnReverse.addEventListener('click', () => {
  flexContainer.classList.toggle('column-reverse');
});
