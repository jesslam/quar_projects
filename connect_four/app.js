document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    for(var i = 0, len = squares.length; i < len; i++)

    (function(index){
        // add an onclick to each square in your grid
        squares[i].onclick = function(){
            // if the square below your current space is "taken", you can place above it
            if(squares[index + 7].classList.contains('taken')){
                if(currentPlayer === 1){
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-one')
                    // Change the player
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else if(currentPlayer === 2 ){
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-two')
                    // Change the player
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
                //if square below current square is not taken, cannot be placed
            } else alert('Nope not, here!')
            console.log(squares[i])
        }
    })(i)

})

