function showTab(tab) {
  document.querySelectorAll('.content').forEach(div => {
    div.style.display = 'none';
  });
  document.getElementById(tab).style.display = 'block';
}

// JUROS COMPOSTOS
function calcularJuros() {
  let c = parseFloat(document.getElementById("capital").value);
  let i = parseFloat(document.getElementById("taxa").value) / 100;
  let t = parseFloat(document.getElementById("tempo").value);

  if (isNaN(c) || isNaN(i) || isNaN(t)) {
    document.getElementById("resultadoJuros").innerText = "Preencha todos os campos!";
    return;
  }

  let montante = c * Math.pow(1 + i, t);
  let juros = montante - c;

  document.getElementById("resultadoJuros").innerText =
    `Montante: R$ ${montante.toFixed(2)} | Juros: R$ ${juros.toFixed(2)}`;
}

// EQUAÇÃO 1º GRAU
function resolverEquacao1() {
  let a = parseFloat(document.getElementById("a1").value);
  let b = parseFloat(document.getElementById("b1").value);

  if (a === 0 || isNaN(a) || isNaN(b)) {
    document.getElementById("resultadoEquacao1").innerText = "Valores inválidos!";
    return;
  }

  let x = -b / a;
  document.getElementById("resultadoEquacao1").innerText = `x = ${x}`;
}

// EQUAÇÃO 2º GRAU
function resolverEquacao2() {
  let a = parseFloat(document.getElementById("a2").value);
  let b = parseFloat(document.getElementById("b2").value);
  let c = parseFloat(document.getElementById("c2").value);

  if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("resultadoEquacao2").innerText = "Valores inválidos!";
    return;
  }

  let delta = b * b - 4 * a * c;

  function formatTerm(value, power) {
    if (value === 0) return "";
    let absValue = Math.abs(value);
    let sign = value < 0 ? " - " : " + ";
    let base = power === 2 ? `${absValue}x²` : `${absValue}x`;
    if (absValue === 1) base = power === 2 ? "x²" : "x";
    return sign + base;
  }

  let equacao = `${a}x²`;
  equacao += formatTerm(b, 1);
  equacao += formatTerm(c, 0);
  equacao += " = 0";

  if (delta < 0) {
    document.getElementById("resultadoEquacao2").innerText =
      `Equação: ${equacao} | Sem raízes reais.`;
    return;
  }

  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);

  document.getElementById("resultadoEquacao2").innerText =
    `Equação: ${equacao} | x1 = ${x1.toFixed(4)} | x2 = ${x2.toFixed(4)}`;
}

// abrir aba padrão
showTab('juros');

function calcularJurosSimples() {
  let c = parseFloat(document.getElementById("capitalS").value);
  let i = parseFloat(document.getElementById("taxaS").value) / 100;
  let t = parseFloat(document.getElementById("tempoS").value);

  if (isNaN(c) || isNaN(i) || isNaN(t)) {
    document.getElementById("resultadoJurosSimples").innerText = "Preencha todos os campos!";
    return;
  }

  let juros = c * i * t;
  let montante = c + juros;

  document.getElementById("resultadoJurosSimples").innerText =
    `Juros: R$ ${juros.toFixed(2)} | Montante: R$ ${montante.toFixed(2)}`;
}
function resolverInequacao1() {
  let a = parseFloat(document.getElementById("aI1").value);
  let b = parseFloat(document.getElementById("bI1").value);

  if (a === 0 || isNaN(a) || isNaN(b)) {
    document.getElementById("resultadoIneq1").innerText = "Valores inválidos!";
    return;
  }

  let x = -b / a;
  let resultado = a > 0 ? `x > ${x}` : `x < ${x}`;

  document.getElementById("resultadoIneq1").innerText = resultado;
}

function resolverInequacao2() {
  let a = parseFloat(document.getElementById("aI2").value);
  let b = parseFloat(document.getElementById("bI2").value);
  let c = parseFloat(document.getElementById("cI2").value);

  if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("resultadoIneq2").innerText = "Valores inválidos!";
    return;
  }

  let delta = b*b - 4*a*c;

  if (delta < 0) {
    if (a > 0) {
      document.getElementById("resultadoIneq2").innerText = "Sempre positiva (∀x)";
    } else {
      document.getElementById("resultadoIneq2").innerText = "Sempre negativa (sem solução)";
    }
    return;
  }

  let x1 = (-b - Math.sqrt(delta)) / (2*a);
  let x2 = (-b + Math.sqrt(delta)) / (2*a);

  if (a > 0) {
    document.getElementById("resultadoIneq2").innerText =
      `x < ${x1.toFixed(2)} ou x > ${x2.toFixed(2)}`;
  } else {
    document.getElementById("resultadoIneq2").innerText =
      `x entre ${x1.toFixed(2)} e ${x2.toFixed(2)}`;
  }
}