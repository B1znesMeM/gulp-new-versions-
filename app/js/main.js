const clickBtn = document.querySelector('.btn');

function click() {
    clickBtn.addEventListener('click', () => {
        clickBtn.classList.add('none');
    })
}

