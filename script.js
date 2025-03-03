document.getElementById('showCard').addEventListener('click', function() {
    let card = document.getElementById('card');
    let music = document.getElementById('music');

    // Показываем открытку
    card.classList.toggle('hidden');

    // Включаем музыку, если открытка показана
    if (!card.classList.contains('hidden')) {
        music.play();
    } else {
        music.pause();
    }
});