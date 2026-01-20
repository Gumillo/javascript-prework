// Losowanie ruchu komputera
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
  computerMove = 'papier';
} else if(randomNumber == 3){
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

// Ruch gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
  playerMove = 'papier';
} else if(playerInput == '3'){
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

// Wynik gry
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Tym razem przegrywasz :(');
} else if( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Tym razem przegrywasz :(');
} else if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Tym razem przegrywasz :(');
} else if( computerMove == playerMove){
  printMessage('Remis!');
} else if( playerMove == 'nieznany ruch'){
  printMessage('Błąd! Wpisz liczbę 1, 2 lub 3.');
}
