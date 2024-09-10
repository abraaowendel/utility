document.querySelector(".btn").addEventListener("click", () => {
  let textoOriginal = document.querySelector("#textoOriginal").value;
  const caracteres = [
    "~",
    ".",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "{",
    "}",
    ":",
    ";",
    "<",
    ">",
    "/",
    ",",
    ".",
    "?",
    "|",
  ];

  if (textoOriginal == "") {
    alert("Campo vazio.");
    return;
  }
  
  caracteres.forEach(caractere => textoOriginal = textoOriginal.replace(caractere, ""))
  let textoFinal = document.querySelector("#textoFinal");
  textoFinal.innerHTML = textoOriginal;

  textoFinal.removeAttribute("disabled");

  textoFinal.select();
  document.execCommand('copy');

});
