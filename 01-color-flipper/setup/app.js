const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const n = getRandomNumber();
  document.body.style.backgroundColor = colors[n];
  color.textContent = colors[n];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
