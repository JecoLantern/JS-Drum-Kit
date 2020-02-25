function removeTransition(k) {
    if(k.propertyname !== 'transform')
    return;
    k.target.classList.remove('playing');
}

function playSound(k) {
    const audio = document.querySelector(`audio[data-key="${k.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${k.keyCode}"]`);
    if (!audio)
    return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('transitionEnd', removeTransition));

window.addEventListener('keydown',playSound);