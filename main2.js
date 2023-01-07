const modal = document.querySelector('.modal')
const openModal = document.getElementById('open-modal')
const closeModal = document.querySelector('.close-modal')

openModal.addEventListener('click', () => {
  modal.show()
})

closeModal.addEventListener('click', () => {
  modal.close()
})


