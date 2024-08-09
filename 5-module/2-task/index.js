function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const text = document.getElementById('text');
  let isHidden = false;

  btn.addEventListener('click', (event) => {
    if (isHidden === false) {
      text.hidden = true;
      isHidden = true;
    } else if (isHidden === true) {
      text.hidden = false;
      isHidden = false;
    }
  });

}
