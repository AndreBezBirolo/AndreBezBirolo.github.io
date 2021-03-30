function typeWriter(element) {
  const textToAnime = element.innerText.split('');
  element.innerText = '';
  textToAnime.forEach((letter, i) => {
    setTimeout(() => element.innerText += letter, 75 * i);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  typeWriter(document.querySelector('h1'));
});

