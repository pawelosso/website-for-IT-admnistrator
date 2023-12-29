const buttonToOpen = document.querySelector('.messageButton');


const blurScreen = () => {
  document.querySelectorAll('.blurWhenMessegeActive').forEach(element => {
    element.classList.toggle('blur');
  })
}

buttonToOpen.addEventListener('click',()=> {
  blurScreen();
})



