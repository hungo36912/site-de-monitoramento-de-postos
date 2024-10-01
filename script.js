// Simulação de dados de postos de saúde
const postosSaude = [
    { nome: "Posto A", endereco: "Endereço A", QuantidadeDeVacinas: 10, distancia: 5, horarioFuncionamento: "08:00 - 17:00", tipodavacina: ["hpv", "hepatite", "coronavac"], fabricante: ["butantan", "Novavax"] },
    { nome: "Posto B", endereco: "Endereço B", QuantidadeDeVacinas: 5, distancia: 10, horarioFuncionamento: "09:00 - 18:00", tipodavacina: ["hpv", "hepatite", "triplice viral"], fabricante: ["sanof", "Moderna "] },
    { nome: "Posto C", endereco: "Endereço C", QuantidadeDeVacinas: 200, distancia: 25, horarioFuncionamento: "09:00 - 18:00", tipodavacina: ["hpv", "gripe", "hiv"], fabricante: ["butantan", "Biontech"] },
];

// Função para calcular a distância entre o usuário e um posto de saúde (simulada)
function calcularDistancia(localUsuario, postoSaude) {
    return Math.abs(localUsuario.distancia - postoSaude.distancia);
}

// Função para exibir a lista de postos de saúde
function exibirPostosSaude(localUsuario) {
    const postosSaudeContainer = document.getElementById("postos-saude");
    postosSaudeContainer.innerHTML = "";

    postosSaude.forEach((postoSaude, index) => {
        const distancia = calcularDistancia(localUsuario, postoSaude);

        const infoPostoSaude = document.createElement("div");
        infoPostoSaude.classList.add("info-posto-saude");

        const vacinasDisponiveis = postoSaude.tipodavacina;
        const fabricantes = postoSaude.fabricante;

        let vacinasHTML = '';
        for (let i = 0; i < vacinasDisponiveis.length; i++) {
            vacinasHTML += `
                <tr>
                    <td>${vacinasDisponiveis[i] != undefined ? vacinasDisponiveis[i] : "Desconhecido"}</td>
                    <td>${fabricantes[i] != undefined ? fabricantes[i] : "Desconhecido"}</td>
                </tr>
            `;
        }

        infoPostoSaude.innerHTML = `
            <h3>${postoSaude.nome}</h3>
            <p>Endereço: ${postoSaude.endereco}</p>
            <p>Vacinas disponíveis: ${postoSaude.QuantidadeDeVacinas}</p>
            <p>Distância: ${distancia} km</p>
            <p>Horário de funcionamento: ${postoSaude.horarioFuncionamento}</p>
            <table class="tabela">
                <tr>
                    <th>tipo</th>
                    <th>fabricante</th>
                </tr>
                ${vacinasHTML}
            </table>
        `;

        postosSaudeContainer.appendChild(infoPostoSaude);
    });
}

// Função para obter a localização do usuário (simulada)
function obterLocalUsuario() {
    return { endereco: "Endereço do usuário", distancia: 0 };
}

// Inicialização do site
document.addEventListener("DOMContentLoaded", () => {
    const localUsuario = obterLocalUsuario();
    document.getElementById("endereco-usuario").textContent = localUsuario.endereco;
    exibirPostosSaude(localUsuario);
});
