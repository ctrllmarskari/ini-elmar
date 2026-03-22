const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const phrases = [
  ",fi,maaf ya gua nolak buat balikan."
  ",klo pun gua dikasih kesempatan buat balik ama lu."
  ",gua bakal nolak kesempatan itu."
  ",no i don't hate u,but i don't want back to u."
  ",sorry ya fi.."
];

const textDiv = document.getElementById("text");
let index = 0;

function typeSentence(sentence, i = 0) {
  if (i < sentence.length) {
    textDiv.innerHTML += sentence.charAt(i);
    setTimeout(() => typeSentence(sentence, i + 1), 40);
  }
}

function showNextPhrase() {
  textDiv.innerHTML = "";
  typeSentence(phrases[index]);
  index = (index + 1) % phrases.length;
}

// Initial typing
showNextPhrase();

// Change phrase on click
document.body.addEventListener("click", showNextPhrase);
