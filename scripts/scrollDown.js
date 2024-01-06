const scrollDown = () => {
    const offset = document.querySelector('main').offsetTop;
    window.scrollTo({
        top:offset,
        left:0,
        behavior:'smooth',
    })
}

document.querySelector('.moreInfo').addEventListener('click', ()=> scrollDown())

