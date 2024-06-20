let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".nvs");

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});


sr.reveal('.main-text', {delay:200, origin:'top'});
sr.reveal('.startingImg', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scroll-down', {delay:500, origin:'right'});

AOS.init();
let numbers = document.querySelector('.numbers');
let numString = numbers.textContent;
let splitNum = numString.split("");
numbers.textContent = "";
for (let i = 0; i < splitNum.length; i++) {
  numbers.innerHTML += '<span>' + splitNum[i] + '</span>'
}