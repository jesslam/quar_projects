document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'cough',
            img: 'images/cough.png'
        },
        {
            name: 'covid-19',
            img: 'images/covid-19.png'
        },
        {
            name: 'diarrhea',
            img: 'images/diarrhea.png'
        },
        {
            name: 'doc',
            img: 'images/doc.png'
        },
        {
            name: 'door',
            img: 'images/door.png'
        },
        {
            name: 'handwash',
            img: 'images/handwash.png'
        },
        {
            name: 'lungs',
            img: 'images/lungs.png'
        },
        {
            name: 'stayhome',
            img: 'images/stayhome.png'
        },
        {
            name: 'blank',
            img: 'images/blank.png'
        },
        {
            name: 'green',
            img: 'images/green.png'
        }
    ]

    const grid = document.querySelector('.grid')
    // create gameboard
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    createBoard()
})
