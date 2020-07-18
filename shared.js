const backdrop= document.querySelector('.backdrop')
const modal= document.querySelector('.modal')
const modalCloseButton= modal.querySelector('button')
const selectPlanButtons= document.querySelectorAll('.plan button')

for(let i=0; i<selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', ()=>{
        backdrop.style.display= 'block'
        modal.style.display= 'block'
    })
}

backdrop.addEventListener('click', modalClose)

modal.addEventListener('click', modalClose)

function modalClose() {
    backdrop.style.display= ''
    modal.style.display= ''
}
