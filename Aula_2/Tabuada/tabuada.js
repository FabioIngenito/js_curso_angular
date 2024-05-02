const btnCalcular = document.querySelector("button");

btnCalcular.addEventListener("click", () => {
  const divValor = document.getElementById("valor").value;
  const divResposta = document.getElementById("resposta");
  const numMin = 1;
  const numMax = 10;
  let calc = "";
  let resultado = "";
  resposta.innerHTML = "";

  if (Number(divValor) < numMin || Number(divValor) > numMax) {
    divResposta.setAttribute("style", "width: 220px;");
    divResposta.innerHTML = `Escolha um numero de ${numMin} a ${numMax}`;
  } else {
    for (var i = 1; i <= numMax; i++) {
      calc = `${String(i)} x ${divValor} = ${i * Number(divValor)}`;
      resultado = document.createElement("div");
      resultado.innerText = calc;
      divResposta.setAttribute("style", "width: 100px;");
      divResposta.appendChild(resultado);
    }
  }
});
