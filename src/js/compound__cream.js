(() => {
   const refs = {
     openModalBtn: document.querySelector('[data-compound__cream-open]'),
     closeModalBtn: document.querySelector('[data-compound__cream-close]'),
     modal: document.querySelector('[data-compound__cream]'),
   };
 
   refs.openModalBtn.addEventListener('click', toggleModal);
   refs.closeModalBtn.addEventListener('click', toggleModal);
 
   function toggleModal() {
     refs.modal.classList.toggle('compound--is-hidden');
   }
})();
 