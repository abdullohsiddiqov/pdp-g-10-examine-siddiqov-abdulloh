const box_1 = document.querySelectorAll('.box-1')
const containers = document.querySelectorAll('.container')

box_1.forEach(box => {
  box.addEventListener('dragstart', () => {
    box.classList.add('active')
  })

  box.addEventListener('dragend', () => {
    box.classList.remove('active')
  })
})
