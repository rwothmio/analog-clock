//sec: 360/60
//min: 360/60*60
//hr: 360/60*60*60

const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");

const hourAngleIncrement = 360 / (60 * 60 * 60);
const minAngleIncrement = 360 / (60 * 60);
const secAngleIncrement = 360 / 60;

const tick = (hand, angleIncrement, currentAngle = 0) => {
  setInterval(() => {
    hand.style.transform = `rotate(${currentAngle}deg)`;
    currentAngle += angleIncrement;
  }, 1000);
};

//tick hour hand
tick(hourHand, hourAngleIncrement);

//tick minutes hand
tick(minHand, minAngleIncrement);

//tick seconds hand
tick(secHand, secAngleIncrement);
