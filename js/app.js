
const BURGER_BUTTON = document.querySelector('.burger')
const BURGER_BODY = document.querySelector('.burger__body')


BURGER_BUTTON.addEventListener('click', ()=>{
		BURGER_BUTTON.classList.toggle('active')
		BURGER_BODY.classList.toggle('active')
})

