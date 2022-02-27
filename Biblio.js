function chiffre(ch) {
  i = 1;
  do {
    i++;
  } while (i < ch.length && ch[i] <= "9" && ch[i] >= "0");
  if (i < ch.length) return false;
  else return true;
}

function lettre(ch) {
  ch = ch.toUpperCase();
  i = 1;
  do {
    i++;
  } while (i < ch.length && ch[i] <= "Z" && ch[i] >= "A");
  if (i < ch.length) return false;
  else return true;
}

function verif() {
  var num = document.getElementById("num").value;
  if (chiffre(num) == false) {
    alert("num invalide");
    return false;
  }
  nom = document.getElementById("n").value;
  if (lettre(nom) == false) {
    alert("nom invalide");
    return false;
  }
  pr = document.getElementById("p").value;
  if (lettre(pr) == false) {
    alert("prénom invalide");
    return false;
  }
  if (
    document.getElementById("f").checked == false &&
    document.getElementById("g").checked == false
  ) {
    alert("Selectionnez le genre");
    return false;
  }
  if (document.getElementById("s").selectedIndex < 0) {
    alert("Selectionnez le niveau");
    return false;
  }
}

function verif2() {
  var num = document.getElementById("e").value;
  if (chiffre(num) == false) {
    alert("num invalide");
    return false;
  }
  if (
    document.getElementById("as").checked == false &&
    document.getElementById("tm").checked == false
  ) {
    alert("Selectionnez une fille");
    return false;
  }
  if (
    document.getElementById("bk").checked == false &&
    document.getElementById("db").checked == false
  ) {
    alert("Selectionnez un garçon");
    return false;
  }
}
