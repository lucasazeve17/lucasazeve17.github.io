const recipes = document.querySelectorAll('.recipe')
const modalOver = document.querySelector('.modal-overlay')


for (const recipe of recipes) {
    recipe.addEventListener('click',()=>{
        modalOver.classList.add('active')
        modalOver.querySelector('img').src=`${recipe.querySelector('img').src}`
        modalOver.querySelector('h3').innerText=`${recipe.querySelector('h3').innerText}`
        modalOver.querySelector('p').innerText=`${recipe.querySelector('p').innerText}`

    })
}

document.querySelector('.close').addEventListener('click',()=>{
    modalOver.classList.remove('active')
})