document.addEventListener('DOMContentLoaded', () => {
  const label: HTMLElement = document.getElementById('label');
  const plusBtn: HTMLElement = document.getElementById('plus');
  const minusBtn: HTMLElement = document.getElementById('minus');
  plusBtn.addEventListener('click', () => {
    label.innerText = (Number(label.innerText) + 1).toString();
  });
  minusBtn.addEventListener('click', () => {
    label.innerText = (Number(label.innerText) - 1).toString();
  });
});
