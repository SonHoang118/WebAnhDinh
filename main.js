const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let sliderShowList = Array.from($$('.slider_show_item'))
let sliderListItem = Array.from($$('.slider_list_item'))
const sliderShowElement = $('.slider_show')

const nextBtn = $('#right')
const prevBtn = $('#left')

let active = 0
let lengthItem = sliderShowList.length

nextBtn.onclick = () => {
    if (active == lengthItem-1){
        active = 0
    }
    else{
        active+=1
    }
    reloadSlider()  
}
prevBtn.onclick = () => {
    if (active == 0){
        active = lengthItem-1
    }
    else{
        active-=1
    }
    reloadSlider()  
}
function reloadSlider(){
    let checkLeft = sliderShowList[active].offsetLeft
    sliderShowElement.style.left = `${-checkLeft}px`

    let lastActiveItem = $('.slider_list .active')
    lastActiveItem.classList.remove('active')
    sliderListItem[active].classList.add('active')
    clearInterval(refreshSlider)
    refreshSlider = setInterval(()=>{
        nextBtn.click()
    },5000)
}

sliderListItem.forEach((e,i)=>{
    e.addEventListener('click',function(){
        active = i
        reloadSlider()
    })
})

let refreshSlider = setInterval(()=>{
    nextBtn.click()
},5000)


//Show and Hide form
const btnElement = $$('.btnBuy')
const formSendEmail = $('.form')
const closeFormSendEmail = $('.form_close')
const htmlElement = $('#htmlTag')

btnElement.forEach((e)=>{
    e.onclick = ()=>{
        formSendEmail.style.display = 'block'
        htmlElement.style.overflowY = 'hidden'
    }
})

closeFormSendEmail.onclick = ()=>{
    formSendEmail.style.display = 'none'
    htmlElement.style.overflowY = 'unset'
}