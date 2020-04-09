document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'cough',
            img: 'images/cough.png'
        },
        {
            name: 'cough',
            img: 'images/cough.png'
        },
        {
            name: 'coffin',
            img: 'images/coffin.png'
        },
        {
            name: 'coffin',
            img: 'images/coffin.png'
        },
        {
            name: 'diarrhea',
            img: 'images/diarrhea.png'
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
            name: 'doc',
            img: 'images/doc.png'
        },
        {
            name: 'door',
            img: 'images/door.png'
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
            name: 'handwash',
            img: 'images/handwash.png'
        },
        {
            name: 'lungs',
            img: 'images/lungs.png'
        },
        {
            name: 'lungs',
            img: 'images/lungs.png'
        },
        {
            name: 'vomit',
            img: 'images/vomit.png'
        },
        {
            name: 'vomit',
            img: 'images/vomit.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // create gameboard
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/green.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId =  cardsChosenId[0]
        if (cardsChosen[0] == cardsChosen[1]){
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/green.png')
            cards[optionTwoId].setAttribute('src', 'images/green.png')
            alert('Sorry, please try again.')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length == cardArray / 2){
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    // flip cards
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        // get card by ID and add name to array
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        // set image based on card id
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length == 2){
            // buffer time
            setTimeout(checkForMatch, 500)
        }

    }

    createBoard()
})
