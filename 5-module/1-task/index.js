function hideSelf() {
  const btn = document.querySelector('.hide-self-button');

  btn.addEventListener('click', (event) => {
    btn.hidden = true;
    console.log('hidden');
  });
}
