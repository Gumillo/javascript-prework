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

// Główna funkcja gry
function playGame(playerInput){
  clearMessages();
  
  // Losowanie ruchu komputera
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);
  
  // Ruch gracza
  console.log('Gracz wybrał: ' + playerInput);
  let playerMove = getMoveName(playerInput);
  
  // Wyświetlenie wyniku
  displayResult(computerMove, playerMove);
}

// Obsługa guzików
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
