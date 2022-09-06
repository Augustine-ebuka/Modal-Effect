const modaltoggle = document.querySelector('#open-modal');
const modalcontainer = document.querySelector('.modal-container');
const cancelmodal =document.querySelector('.cancel-btn');

modaltoggle.addEventListener('click', () => {
    modalcontainer.style.display='block'
})

cancelmodal.addEventListener('click', () => {
    modalcontainer.style.display='none'
})

window.addEventListener('click', (e) => {
    if (e.target === modalcontainer) {
        modalcontainer.style.display = 'none';
    }
});

