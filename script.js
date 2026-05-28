document.getElementById('queueForm').addEventListener('submit', function(e) {
    // 1. Impede o formulário de recarregar a página
    e.preventDefault();

    // 2. Captura os valores digitados
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
    
    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

    // Aplica a formatação (00) 00000-0000
    if (value.length > 7) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
        value = `(${value}`;
    }
    
    e.target.value = value;
});

    // 3. Salva o nome para usar na tela de status (opcional, mas legal!)
    localStorage.setItem('userName', name);

    // 4. Log no console para teste técnico
    console.log("Usuário cadastrado com sucesso:", { name, phone });

    // 5. Alerta de confirmação
    alert(`Olá ${name}! Você foi adicionado à fila com sucesso.`);
    
    // 6. Redireciona para a página de status (Passo 2)
    window.location.href = "status.html";

    // Adicione isso dentro da lógica quando a posição chegar a 1
if ("vibrate" in navigator) {
    // Vibra por 500ms, pausa 250ms, vibra por 500ms
    navigator.vibrate([500, 250, 500]);
}
});