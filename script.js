let respondido = false;
let tempoRestante = 20; // segundos
let intervalo;

function iniciarCronometro() {
  const tempoSpan = document.getElementById("cronometro");
  intervalo = setInterval(() => {
    tempoRestante--;
    tempoSpan.innerText = tempoRestante + "s";

    if (tempoRestante <= 0) {
      clearInterval(intervalo);
      tempoSpan.innerText = "Tempo esgotado!";
      desabilitarOpcoes();
    }

    atualizarBarraProgresso();
  }, 1000);
}

function atualizarBarraProgresso() {
  const barra = document.getElementById("barra-progresso");
  if (barra) {
    barra.style.width = (tempoRestante / 20) * 100 + "%";
  }
}

function responder(elemento, correta, proximaPagina) {
  if (respondido) return;
  respondido = true;
  clearInterval(intervalo);

  if (correta) {
    elemento.classList.add('correct');
    mostrarBotao(proximaPagina);
  } else {
    elemento.classList.add('wrong');
  }
}

function mostrarBotao(proximaPagina) {
  const botao = document.getElementById("btnProxima");
  if (botao) {
    botao.style.display = "inline-block";
    botao.classList.add("btn-proxima");
    botao.onclick = () => {
      window.location.href = proximaPagina;
    };
  }
}

function tentarNovamente() {
  location.reload();
}

function desabilitarOpcoes() {
  document.querySelectorAll(".option").forEach(opt => {
    opt.style.pointerEvents = "none";
  });
}
