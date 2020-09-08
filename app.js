console.log('It works')

function createCard() {
    document.querySelector('#card').innerHTML = ('something here 2')
    console.log('from createcard')
}


document.querySelector('.btn').addEventListener('mouseenter', createCard)

