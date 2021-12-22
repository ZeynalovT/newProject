const toggleModal = () => {
    document.querySelector('.newModal')
        .classList.toggle('modal--hidden')
}

document.querySelector('#show-modal')
    .addEventListener('click', toggleModal)

document.querySelector('#submit')
    .addEventListener('click', toggleModal)