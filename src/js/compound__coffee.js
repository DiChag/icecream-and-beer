(() => {
   const refs = {
     openModalBtn: document.querySelector('[data-compound__coffee-open]'),
     closeModalBtn: document.querySelector('[data-compound__coffee-close]'),
     modal: document.querySelector('[data-compound__coffee]'),
   };
 
   refs.openModalBtn.addEventListener('click', toggleModal);
   refs.closeModalBtn.addEventListener('click', toggleModal);
 
   function toggleModal() {
     refs.modal.classList.toggle('compound--is-hidden');
   }
})();
 