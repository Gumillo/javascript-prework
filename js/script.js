// Funkcja konwertująca numer ruchu na nazwę
function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  }
  
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

// Funkcja wyświetlająca wynik gry
function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Tym razem przegrywasz :(');
  } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Tym razem przegrywasz :(');
  } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Tym razem przegrywasz :(');
  } else if( argComputerMove == argPlayerMove){
    printMessage('Remis!');
  } else if( argPlayerMove == 'nieznany ruch'){
    printMessage('Błąd! Wpisz liczbę 1, 2 lub 3.');
  }
}

// Losowanie ruchu komputera
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

// Ruch gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

// Wyświetlenie wyniku
displayResult(computerMove, playerMove);
