document.addEventListener("DOMContentLoaded", function () {
  const inputTarefa = document.querySelector("input");
  const botaoAdicionar = document.querySelector("button");
  const ulListaTarefa = document.querySelector(".lista-tarefa");
  const spanListasPendentes = document.querySelector(".listaspendentes");
  const botaoLimparTudo = document.querySelector(".footer button");

  // Adicionar evento de clique ao botão 'Ok'
  botaoAdicionar.addEventListener("click", adicionarTarefa);

  // Adicionar evento de clique ao botão 'Limpar tudo'
  botaoLimparTudo.addEventListener("click", limparTudo);

  // Função para adicionar uma nova tarefa à lista
  function adicionarTarefa() {
    const descricaoTarefa = inputTarefa.value.trim();

    if (descricaoTarefa !== "") {
      const liNovaTarefa = document.createElement("li");
      const spanDescricao = document.createElement("span");
      spanDescricao.textContent = descricaoTarefa;

      const botaoRemover = document.createElement("button");
      botaoRemover.textContent = "❌";
      botaoRemover.addEventListener("click", function () {
        removerTarefa(liNovaTarefa);
      });

      const botaoFeito = document.createElement("button");
      botaoFeito.innerHTML = "✅"; // ✅
      botaoFeito.addEventListener("click", function () {
        marcarFeito(liNovaTarefa, botaoFeito);
      });

      liNovaTarefa.appendChild(spanDescricao);
      liNovaTarefa.appendChild(botaoRemover);
      liNovaTarefa.appendChild(botaoFeito);

      ulListaTarefa.appendChild(liNovaTarefa);

      // Limpar campo de entrada após adicionar a tarefa
      inputTarefa.value = "";

      // Atualizar a contagem de tarefas pendentes
      atualizarContagemPendentes();
    }
  }

  // Função para remover uma tarefa
  function removerTarefa(liTarefa) {
    liTarefa.remove();

    // Atualizar a contagem de tarefas pendentes
    atualizarContagemPendentes();
  }

  // Função para limpar todas as tarefas
  function limparTudo() {
    ulListaTarefa.innerHTML = "";

    // Atualizar a contagem de tarefas pendentes
    atualizarContagemPendentes();
  }

  // Função para atualizar a contagem de tarefas pendentes
  function atualizarContagemPendentes() {
    const quantidadePendentes = ulListaTarefa.children.length;
    spanListasPendentes.textContent =
      quantidadePendentes === 1
        ? "1 tarefa pendente"
        : `${quantidadePendentes} tarefas pendentes`;
  }

  // Função para marcar uma tarefa como "feito"
  function marcarFeito(liTarefa, botaoFeito) {
    liTarefa.classList.toggle("feito");
    botaoFeito.classList.toggle("feito"); // Adiciona a classe "feito" ao botão

    // Atualizar a contagem de tarefas pendentes
    atualizarContagemPendentes();
  }
});
