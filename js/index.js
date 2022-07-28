document.addEventListener('DOMContentLoaded', () => {
  const mainTitle = document.querySelector('h1')

  mainTitle.addEventListener('click', () => {
    mainTitle.innerHTML = 'Саша задрот'
    mainTitle.style.color = 'red'
  })
})

