const mascara = (m,t,e,c) => {
  let cursor = t.selectionStart;
  let texto = t.value;
  texto = texto.replace(/\D/g,'');
  let l = texto.length;
  let lm = m.length;
  let id;
  if (window.event) {
    id = e.keyCode;
  } else if (e.which) {
    id = e.which;
  }
  let cursorfixo = false;
  if(cursor < l)cursorfixo=true;
  let livre = false;
  if(id === 16 || id === 19 || (id >= 33 && id <= 40))livre = true;
  let ii = 0;
  let mm = 0;
  let j;
  if (!livre) {
    if (id !== 8) {
      t.value = "";
      j = 0;
      for (let i = 0; i < lm; i++) {
        if (m.substr(i, 1) === "#") {
          t.value += texto.substr(j, 1);
          j++;
        } else if (m.substr(i, 1) !== "#") {
          t.value += m.substr(i, 1);
        }
        if (id !== 8 && !cursorfixo) cursor++;
        if ((j) === l + 1) break;

      }
    }
  }
  if(cursorfixo && !livre)cursor--;
  t.setSelectionRange(cursor, cursor);
}
