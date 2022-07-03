(() => {
  const refs = {
    readMoreBtn: document.querySelector('.about__button'),
    hiddenTextContainer: document.querySelector('.hiddenText'),
  };

  refs.readMoreBtn.addEventListener('click', displayHiddenText);

  function displayHiddenText() {
    const isVisible = refs.hiddenTextContainer.classList.contains('visible');
    refs.hiddenTextContainer.classList.toggle('visible');
    refs.readMoreBtn.innerHTML = isVisible ? 'Read more' : 'Close me';
  }
})();
