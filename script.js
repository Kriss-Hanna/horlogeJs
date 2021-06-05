const secondeDiv = document.querySelector(".sec");
const minDiv = document.querySelector(".min");
const heureDiv = document.querySelector(".heure");

function miseEnPlace() {
  const now = new Date();
  
  // Les secondes
  const second = now.getSeconds();
  const secDeg= ((second/60) * 360) + 90;
  secondeDiv.style.transform = `rotate(${secDeg}deg)`;

  // Les minutes
  const minut = now.getMinutes();
  const minDeg= ((minut/60) * 360) + ((second/60) * 6) + 90;
  minDiv.style.transform = `rotate(${minDeg}deg)`;

  // Les heures
  const hour = now.getHours();
  const hourDeg = ((hour / 12) * 360) + ((minut/60) *30) + 90 ;
  heureDiv.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(miseEnPlace, 1000);
