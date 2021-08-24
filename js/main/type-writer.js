const typeWriter = function (element) {
  const textToAnime = element.innerText.split('');
  element.innerText = '';
  textToAnime.forEach((letter, i) => {
    setTimeout(() => element.innerText += letter, 75 * i);
  });
}
