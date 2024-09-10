document.querySelector(".btn").addEventListener("click", () => {
    const textoOriginal = document.querySelector("#textoOriginal").value;
    
    if (textoOriginal === "") {
      alert("Campo vazio.");
      return;
    }
    
    // Remove caracteres especiais usando expressão regular
    const textoFinal = textoOriginal.replace(/[~.`!@#$%^&*()\-_=+\[{;:,.?\/|}]+/g, "");
  
    // Atualiza o conteúdo do elemento de saída
    const resultado = document.querySelector("#textoFinal");
    resultado.innerText = textoFinal;
  
    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(textoFinal).then(() => {
      alert("Texto copiado para a área de transferência!");
    }).catch(err => {
      alert("Erro ao copiar o texto: " + err);
    });
  });
  