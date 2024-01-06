window.scrollTo({
  left:0,
  top:0,
  behavior:'smooth',
})

const startTypingFirstLine = () => new Promise(resolve => {
  let presentText = '';
  let textToShow = 'Administrator Systemów';
  const firstLine = document.querySelector('header .text .title .firstLine');
  const cursor = firstLine.innerHTML;
 
  textToShow.split('').forEach((item, index) => {
    setTimeout(()=> {
      presentText += item
      firstLine.innerHTML = presentText + cursor
      if(firstLine.innerHTML === textToShow + cursor) resolve()
    }, index * 70)
   })

})

const startTypingSecondLine = () => new Promise(resolve => {
  let presentText = '';
  let textToShow = 'Informatycznych.';
  const secondLine = document.querySelector('header .text .title .secondLine');
  const cursor = secondLine.innerHTML;

  textToShow.split('').forEach((item, index) => {
    setTimeout(()=> {
      presentText += item
      secondLine.innerHTML = presentText + cursor
      if(secondLine.innerHTML === textToShow + cursor) resolve()
    }, index * 70)
   })
})


startTypingFirstLine()
  .then(()=> {
    document.querySelector('header .text .title .firstLine span').style.opacity = '0';
    startTypingSecondLine()
      .then(()=> {
        document.querySelector('header .text .title .secondLine span').style.animation = 'typingAnimation .6s alternate infinite';
        document.querySelectorAll('.notVisible').forEach(item => item.style.transition = 'transform 1s, opacity 1s');
        document.querySelectorAll('.notVisible').forEach(item => item.classList.remove('notVisible'));
        document.querySelector('body').style.overflow = 'auto';
      })
  })

