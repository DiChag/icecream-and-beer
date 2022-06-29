(() => {
   const refs = {
     openModalBtn: document.querySelector('[data-compound__milkshakes-open]'),
     closeModalBtn: document.querySelector('[data-compound__milkshakes-close]'),
     modal: document.querySelector('[data-compound__milkshakes]'),
   };
 
   refs.openModalBtn.addEventListener('click', toggleModal);
   refs.closeModalBtn.addEventListener('click', toggleModal);
 
   function toggleModal() {
     refs.modal.classList.toggle('compound--is-hidden');
   }
})();