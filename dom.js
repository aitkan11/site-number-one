let div = document.querySelector('.block')
let date = document.querySelector('.date')
let pass = document.querySelector('.password')
let btn = document.querySelector('.btn')
let body = document.querySelector('body')
let div2 = document.querySelector('.block2')
let text = document.querySelector('.text')
let btnClose = document.querySelector('.close')


body.style.background = 'orange'


div2.style.width = '350px'
div2.style.height = '150px'
div2.style.display = 'Flex'
div2.style.alignItems = 'center'
div2.style.flexDirection = 'column'
div2.style.position = 'relative'
div2.style.borderRadius = '10px 10px 10px 0'
div2.style.left = '970px'
div2.style.top = '-200px'
div2.style.background = '#90EE90'
div2.style.display = 'none'
btnClose.style.position = 'relative'
btnClose.style.left = '300px'
btnClose.style.top = '5px'
btnClose.style.color = 'pink'
btnClose.style.border = 'none'
btnClose.style.background = 'yellow'
text.style.position = 'relative'
text.style.left = '20px'
text.style.color = 'purple'
btn.style.border = '2px solid orange'





div.style.width = '350px'
div.style.height = '250px'
div.style.display = 'Flex'
div.style.alignItems = 'center'
div.style.flexDirection = 'column'
div.style.position = 'relative'
div.style.left = '600px'
div.style.top = '200px'
div.style.border = '15px solid green'
div.style.borderRadius = '10px'
div.style.background = 'grey'
div.style.padding = '20px 0 0 0'
pass.style.margin = '30px 0 30px 0'
btn.addEventListener('click', () => {
    div2.style.display = 'block'

})
btnClose.addEventListener('click', () => {
    div2.style.display = 'none'
})


btn.addEventListener('mouseover', () => {
    btn.style.transition = '2s'
    btn.style.fontSize = '50px'
    btn.style.color = 'green'
    btn.style.border = '5px solid red'
    btn.style.borderRadius = '25px 25px 25px 0'
    btn.style.boxShadow = '0 0 20px 10px  red'

})
btnClose.addEventListener('mouseover', () => {
    btnClose.style.transition = '1s'
    btnClose.style.fontSize = '20px'
    btnClose.style.color = 'red'
    btnClose.style.color = 'darkgreen'

})

btn.addEventListener('mouseleave', () => {
    btn.style.fontSize = ''
    btn.style.color = '2s'
    btn.style.display = 'block'
    btn.style.boxShadow = ''
    btn.style.border = '2px solid orange'
    btn.style.borderRadius = ''

})
btnClose.addEventListener('mouseleave', (e) => {
    btnClose.style.fontSize = ''
    btnClose.style.transition = '1s'
    btnClose.style.display = 'block'
})

// window.addEventListener('click', (event) =>{
//     if (event.target !== div2){
//         div2.style.display = 'none'
//     }
// })
body.addEventListener('click', (event) => {
    if (event.target === body || event.target === div) {
        div2.style.display = 'none'
    }
})