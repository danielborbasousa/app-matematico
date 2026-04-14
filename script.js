// TEMAS
const themes = ['theme-cyber', 'theme-ocean', 'theme-aurora'];
const icons = ['🚀', '🌊', '🌅'];
let currentTheme = 0;

document.getElementById('themeCycle').addEventListener('click', () => {
  document.body.classList.remove(themes[currentTheme]);
  currentTheme = (currentTheme + 1) % themes.length;
  document.body.classList.add(themes[currentTheme]);
  document.querySelector('.theme-icon').textContent = icons[currentTheme];
});

// NAVEGAÇÃO
document.querySelectorAll('.tab-btn').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
    document.getElementById('moduloAtivo').textContent = tab.textContent;
  });
});

// ESTADOS
let jurosMode = 'composto';
let eqDegree = 2;
let ineqDegree = 1;

function setJurosMode(m, btn) { jurosMode = m; toggleModeBtn(btn); }
function setEqDegree(d, btn) { 
  eqDegree = d; 
  document.getElementById('boxEqC').style.display = (d === 1) ? 'none' : 'block';
  toggleModeBtn(btn); 
}
function setIneqDegree(d, btn) { 
  ineqDegree = d; 
  document.getElementById('boxIneqC').style.display = (d === 1) ? 'none' : 'block';
  toggleModeBtn(btn); 
}

function toggleModeBtn(btn) {
  btn.parentElement.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// MATEMÁTICA
function addLog(msg) {
  const lista = document.getElementById('historicoLista');
  const li = document.createElement('li');
  li.className = 'history-item';
  li.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
  lista.prepend(li);
}

function limparCampos(id) {
  const p = document.getElementById(id);
  p.querySelectorAll('input').forEach(i => i.value = '');
  p.querySelector('.result').textContent = '';
}

function calcJuros() {
  const c = parseFloat(document.getElementById('jCap').value);
  const i = parseFloat(document.getElementById('jTax').value) / 100;
  const t = parseFloat(document.getElementById('jTime').value);
  if (isNaN(c) || isNaN(i) || isNaN(t)) return;

  let total = (jurosMode === 'composto') ? c * Math.pow((1 + i), t) : c + (c * i * t);
  document.getElementById('resJuros').innerHTML = `Total: R$ ${total.toFixed(2)}<br>Juros: R$ ${(total - c).toFixed(2)}`;
  addLog(`Juros ${jurosMode}: R$ ${total.toFixed(2)}`);
}

function resolverEquacao() {
  const a = parseFloat(document.getElementById('eqA').value);
  const b = parseFloat(document.getElementById('eqB').value);
  const c = parseFloat(document.getElementById('eqC').value) || 0;
  const res = document.getElementById('resEq');

  if (isNaN(a) || isNaN(b)) return;

  if (eqDegree === 1) {
    res.textContent = `x = ${(-b / a).toFixed(4)}`;
    addLog(`Eq 1º Grau: x=${(-b/a).toFixed(2)}`);
  } else {
    const delta = (b * b) - (4 * a * c);
    if (delta < 0) res.textContent = "Sem raízes reais (Δ < 0)";
    else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      res.innerHTML = `x1 = ${x1.toFixed(4)}<br>x2 = ${x2.toFixed(4)}<br>Δ = ${delta}`;
      addLog(`Eq 2º Grau: Δ=${delta}`);
    }
  }
}

function resolverInequacao() {
  const a = parseFloat(document.getElementById('ineqA').value);
  const b = parseFloat(document.getElementById('ineqB').value);
  const sign = document.getElementById('ineqSign').value;
  const res = document.getElementById('resIneq');
  if (isNaN(a) || isNaN(b)) return;

  let x = -b / a;
  let s = (a > 0) ? sign : (sign === '>' ? '<' : '>');
  res.textContent = `Solução: x ${s} ${x.toFixed(2)}`;
  addLog(`Ineq: x ${s} ${x.toFixed(2)}`);
}

function calcSets(op) {
  const a = document.getElementById('setA').value.split(',').map(s => s.trim());
  const b = document.getElementById('setB').value.split(',').map(s => s.trim());
  let r = (op === 'uniao') ? [...new Set([...a, ...b])] : a.filter(x => b.includes(x));
  document.getElementById('resSets').textContent = `{ ${r.join(', ')} }`;
}

function limparHistorico() { document.getElementById('historicoLista').innerHTML = ''; }