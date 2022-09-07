const btn = document.getElementById('toggle')
const navbar = document.getElementById('nav')

btn.addEventListener('click',()=>{
        navbar.classList.toggle('active')
})