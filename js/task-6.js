function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');
const input = controls.querySelector('input');

// Event listener for the "Create" and "Destroy" buttons
controls.addEventListener('click', (event) => {
  if (event.target.dataset.create) {
    const amount = input.value;
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    }
  } else if (event.target.dataset.destroy) {
    destroyBoxes();
  }
});

// Event listener for the input field
input.addEventListener('input', () => {
  // You can add additional logic here if needed
});

function createBoxes(amount) {
  destroyBoxes();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = '5px';
    box.style.border = '1px solid #000';
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}