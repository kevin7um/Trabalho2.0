const modalExclusao = document.getElementById('ModalExclusao')
modalExclusao.addEventListener('show.bs.modal', event => {

  const button = event.relatedTarget

  const id = button.getAttribute('data-bs-id')
  const titulo = button.getAttribute('data-bs-titulo')

  const conteudoModal = modalExclusao.querySelector('.modal-body p')
  const linkModal = modalExclusao.querySelector('.modal-footer a')

  conteudoModal.textContent = `Tem certeza que deseja excluir a anotação:  ${titulo}`
  linkModal.href = `/anotacao/deleta/${id}`
})

function addIcons(item){
  if(item.lastElementChild.textContent === "Trabalho"){
    item.firstElementChild.classList.add('bi')
    item.firstElementChild.classList.add('bi-person-workspace')
  } 
  else if(item.lastElementChild.textContent === "Curso"){
    item.firstElementChild.classList.add('bi')
    item.firstElementChild.classList.add('bi-bookmarks-fill')
  }
  else if(item.lastElementChild.textContent === "Pessoal"){
    item.firstElementChild.classList.add('bi')
    item.firstElementChild.classList.add('bi-file-person-fill')
  } 
  else if(item.lastElementChild.textContent === "Lazer"){
    item.firstElementChild.classList.add('bi')
    item.firstElementChild.classList.add('bi-brightness-alt-high-fill')
  }
}
const linkTag = document.querySelectorAll('#js-link-tag');

window.onload = () => {
  linkTag.forEach(items => {
    addIcons(items)
  })
}
