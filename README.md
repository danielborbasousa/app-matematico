# 📊 App Matemático Web

Um aplicativo web simples desenvolvido com **HTML, CSS e JavaScript puro**, com o objetivo de resolver problemas básicos de matemática financeira e álgebra.

---

## 🚀 Funcionalidades

O sistema foi dividido em módulos para facilitar o uso:

### 💰 Juros

* Cálculo de **juros simples**
* Cálculo de **juros compostos**
* Retorno de:

  * Juros gerados
  * Montante final

---

### 📐 Equações

* **Equação do 1º grau**

  * Formato: `ax + b = 0`
  * Retorna o valor de `x`

* **Equação do 2º grau**

  * Formato: `ax² + bx + c = 0`
  * Cálculo do Δ (delta)
  * Retorno das raízes reais (quando existem)

---

### ⚖️ Inequações

* **Inequação do 1º grau**

  * Formato: `ax + b > 0`
  * Considera inversão de sinal automaticamente

* **Inequação do 2º grau**

  * Formato: `ax² + bx + c > 0`
  * Análise completa:

    * Δ < 0 → sempre positivo ou negativo
    * Δ ≥ 0 → intervalos de solução

---

## 🧠 Como funciona

O sistema funciona totalmente no navegador, sem necessidade de backend.

### 🔹 Estrutura

* `index.html` → Estrutura da aplicação
* `style.css` → Estilização da interface
* `script.js` → Lógica matemática

---

### 🔹 Navegação

O usuário alterna entre as funcionalidades através de abas.

```javascript
function showTab(tab) {
  document.querySelectorAll('.content').forEach(div => {
    div.style.display = 'none';
  });
  document.getElementById(tab).style.display = 'block';
}
```

---

### 🔹 Exemplo de cálculo

#### Juros Compostos:

```javascript
let montante = c * Math.pow(1 + i, t);
```

#### Equação do 2º grau:

```javascript
let delta = b * b - 4 * a * c;
```

---

## 🎯 Objetivo

Este projeto foi desenvolvido com foco em:

* Praticar lógica de programação em JavaScript
* Aplicar conceitos matemáticos na prática
* Criar uma interface simples e funcional
* Servir como base para evolução futura (gráficos, histórico, etc.)

---

## 💡 Possíveis melhorias

* 📊 Visualização gráfica das funções
* 💾 Armazenamento de histórico (localStorage)
* 📱 Responsividade mobile
* 🎓 Resolução passo a passo

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)

---

## 📌 Como executar

1. Clone o repositório:

```bash
git clone <seu-repo>
```

2. Abra o arquivo:

```bash
index.html
```

---

## 👨‍💻 Autor

Desenvolvido por mim mesmo  — focado em transformar a tecnologia no amanhã 🚀
