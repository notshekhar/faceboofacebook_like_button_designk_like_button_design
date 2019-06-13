let like_button = document.querySelector('.like_button')
let like_box = document.querySelector('.top_box')

let tf = true
like_button.onclick = () => {
  tf ? like_box.classList.add('animate') : like_box.classList.remove('animate')
  tf = !tf 
}
