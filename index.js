const humburgerBtn = document.querySelector('.header .container .links i')
const drawer = document.querySelector('.header .container .links ul')
const drawerItems = document.querySelector('.header .container .links ul li a')
const closeNavBtn = document.querySelector('.closebtn')
humburgerBtn.addEventListener('click', () => {
  console.log('CLicked!!')
  drawer.classList.add('active-drawer')
  closeNavBtn.style.display = 'block'
})
closeNavBtn.addEventListener('click', () => {
  drawer.classList.remove('active-drawer')
  closeNavBtn.style.display = 'none'
})
