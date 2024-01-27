
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return;
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }

  boxesContainer.appendChild(fragment);
  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}




const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');


createButton.style.display = 'inline-flex';
createButton.style.padding = '8px 16px';
createButton.style.justifyContent = 'center';
createButton.style.alignItems = 'center';
createButton.style.gap = '10px';
createButton.style.borderRadius = '8px';
createButton.style.background = '#4E75FF';

destroyButton.style.display = 'inline-flex';
destroyButton.style.padding = '8px 16px';
destroyButton.style.justifyContent = 'center';
destroyButton.style.alignItems = 'center';
destroyButton.style.gap = '10px';
destroyButton.style.borderRadius = '8px';
destroyButton.style.background = `#FF4E4E`;



createButton.addEventListener('mouseover', function() {
  createButton.style.background = '#6C8CFF'; 
});

createButton.addEventListener('mouseleave', function() {
  createButton.style.background = '#4E75FF'; 
});

destroyButton.addEventListener('mouseover', function() {
  destroyButton.style.background = '#FF7070'; 
});

destroyButton.addEventListener('mouseleave', function() {
  destroyButton.style.background = '#FF4E4E'; 
});

