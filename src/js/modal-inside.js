(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-inside]"),
    closeModalBtn: document.querySelector("[data-modal-close-inside]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();