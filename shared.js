const backdrop= document.querySelector('.backdrop')
const modal= document.querySelector('.modal')
const modalCloseButton= modal.querySelector('button')
const selectPlanButtons= document.querySelectorAll('.plan button')

const toggleButton= document.querySelector('.toggle-button')
const sideNavBar= document.querySelector('.mobile-nav')

for(let i=0; i<selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', ()=>{
        backdrop.classList.add('open')
        modal.classList.add('open')
    })
}

backdrop.addEventListener('click', modalClose)

modalCloseButton.addEventListener('click', modalClose)

function modalClose() {
    backdrop.classList.remove('open')
    modal.classList.remove('open')
    sideNavBar.classList.remove('open')
}

toggleButton.addEventListener('click', ()=>{
    sideNavBar.classList.add('open')
    backdrop.classList.add('open')
})
