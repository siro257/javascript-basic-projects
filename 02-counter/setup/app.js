let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const id = e.currentTarget.id;

    if (id === 'increase') {
      count++;
    } else if (id === 'decrease') {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = 'green';
    }
    if (count > 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = '#222';
    }
    value.innerHTML = count;
  });
});
