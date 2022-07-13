import JSConfetti from 'js-confetti';

console.log('Welcome to js');

const heart = document.getElementById("btn-heart");
const getheart = document.getElementById("get-heart");
const jsConfetti = new JSConfetti();


function totalheart(value) {
    const totheart = document.getElementById("totalheart");
    const thisvalue = parseInt(totheart.textContent);
    let newvalue = thisvalue + value;
    totheart.textContent = newvalue;
    if (totheart.textContent % 10 == 0) { // every 10 heart celebrate
        jsConfetti.addConfetti();
        const word = alert("Celebrate");
    }
}

heart.addEventListener("click", function() {
    console.log("click");
    let icon = '<span class="iconify icon" data-icon="bi:balloon-heart-fill" data-width="50"></span>'
    getheart.insertAdjacentHTML("beforeend", icon);
    totalheart(1);
});