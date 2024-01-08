const buttonToOpen = document.querySelector('.messageButton');

const hideForm = () => {
  document.querySelector('.messageInfo').classList.add('hide');
  document.querySelector('.messageInfo-container').classList.add('hide');
  document.querySelector('.messageInfo').addEventListener('transitionend', ()=>{
    document.querySelectorAll('.blurWhenMessegeActive').forEach(element => element.classList.remove('blur'))
    document.querySelector('.messageInfo-container').remove();
    buttonToOpen.classList.remove('hide');
    document.querySelector('.arrowUp').classList.remove('hide');
  })
}

const showForm = () => {
  const messageBody = `
    <div class="messageInfo hide">
      <div class="closeButton">
        <img src="images/close.png" alt="closeButton">
      </div>
      <p class='mail'>lukasz.aleksandrowicz@allcon.pl</p>
      <div class="images">
        <a href="#">
          <img src="images/linkedin.png" alt="linkedin">
          <p>linkedin</p>
        </a>
        <a href="#">
          <img src="images/github.png" alt="github">
          <p>github</p>
        </a>
      </div>
    </div>`;

  buttonToOpen.classList.add('hide');
  document.querySelector('.arrowUp').classList.add('hide');
  
  let isTransitionEndHandled = false;

  buttonToOpen.addEventListener('transitionend', event => {
    if (!isTransitionEndHandled && event.propertyName === 'opacity') {
      const createWindow = document.createElement('div');
      document.querySelector('body').prepend(createWindow)
      createWindow.classList.add('messageInfo-container');
      createWindow.innerHTML = messageBody;
    
      setTimeout(()=>document.querySelector('.messageInfo').classList.remove('hide'));
      document.querySelector('.messageInfo .closeButton').addEventListener('click', ()=> hideForm())
      
      isTransitionEndHandled = true;
    }
  })
}


const blurScreen = () => {
  document.querySelectorAll('.blurWhenMessegeActive').forEach(element => {
    element.classList.toggle('blur');
  })
}


buttonToOpen.addEventListener('click',()=> {
  blurScreen();
  showForm();
})





