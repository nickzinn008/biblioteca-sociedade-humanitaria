document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('google-form');
    const telInput = document.getElementById('tel-contato');
    const nomeInput = document.getElementById('nome-contato');
    const nomeErro = document.getElementById('nome-erro');

    // --- 1. MÁSCARA DE TELEFONE AUTOMÁTICA ---
    telInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
        let formattedValue = '';

        if (value.length > 0) {
            formattedValue = '(' + value.substring(0, 2);
            if (value.length > 2) {
                formattedValue += ') ' + value.substring(2, 7);
            }
            if (value.length > 7) {
                formattedValue += '-' + value.substring(7, 11);
            }
        }
        e.target.value = formattedValue;
    });

    // --- 2. LÓGICA DE ENVIO E VALIDAÇÃO ---
    form.addEventListener('submit', function(e) {
        // Impedimos o envio imediato para validar o nome
        e.preventDefault();

        const nomeCompleto = nomeInput.value.trim();
        const partesDoNome = nomeCompleto.split(/\s+/); // Divide por espaços

        // Validação de Sobrenome (mínimo 2 palavras)
        if (partesDoNome.length < 2) {
            nomeErro.textContent = "Por favor, insira seu nome e sobrenome.";
            nomeInput.style.border = "2px solid #ff4444";
            nomeInput.focus();
            return; // Para a execução aqui e não envia
        }

        // Se passou na validação, limpamos erros e enviamos
        nomeErro.textContent = "";
        nomeInput.style.border = "1px solid var(--verde-escuro)";

        console.log("Formulário validado! Enviando...");

        // AQUI ESTÁ O TRUQUE: 
        // Se você estiver usando o Action do Google Forms, usamos o submit() nativo.
        // Se estiver usando uma API, você colocaria o código de Fetch aqui.
        
        // Vamos disparar o envio oficial:
        alert("Mensagem enviada com sucesso! A Sociedade Humanitária agradece seu contato.");
        this.submit(); 
    });
});