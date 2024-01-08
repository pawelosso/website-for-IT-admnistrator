const scrollUp = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
}

document.addEventListener('DOMContentLoaded', function () {
    scrollUp()
});

document.querySelector('.arrowUp').addEventListener('click', ()=> scrollUp())


document.addEventListener('scroll', () => {
    if(window.scrollY >= 300){
        document.querySelector('.arrowUp').classList.add('showWhenScroll');
    } else document.querySelector('.arrowUp').classList.remove('showWhenScroll');
})