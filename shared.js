const backdrop= document.querySelector('.backdrop')
const modal= document.querySelector('.modal')
const selectPlanButtons= document.querySelectorAll('.plan button')
let modalCloseButton=''
const toggleButton= document.querySelector('.toggle-button')
const sideNavBar= document.querySelector('.mobile-nav')
if(modal){
    modalCloseButton= modal.querySelector('button')
}

for(let i=0; i<selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', ()=>{
        backdrop.classList.add('open')
        modal.classList.add('open')
    })
}

backdrop.addEventListener('click', modalClose)

if(modalCloseButton){
    modalCloseButton.addEventListener('click', modalClose)
}

function modalClose() {
    backdrop.classList.remove('open')
    if(modal){
        modal.classList.remove('open')
    }
    if(sideNavBar){
    sideNavBar.classList.remove('open')
    }
}

toggleButton.addEventListener('click', ()=>{
    sideNavBar.classList.add('open')
    backdrop.classList.add('open')
})
