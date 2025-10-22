window.onload = function() {
    const theme = {
        button: document.getElementById('switch-theme-button'),
        audio: document.getElementById('music'),
        body: document.body
    };

    function switchTheme() {
        // Alterna as classes
        theme.body.classList.toggle('dark-theme');
        theme.body.classList.toggle('light-theme');
        
        // Verifica o tema atual
        const isDark = theme.body.classList.contains('dark-theme');
        
        // Troca a música
        theme.audio.src = isDark ? 'assets/musics/inverted-world.mpeg' : 'assets/musics/normal-world.mpeg';
        theme.audio.play().catch(error => console.log('Erro ao tocar música:', error));
        
        // Atualiza o texto do botão
        if (theme.button) {
            theme.button.textContent = isDark ? 'Voltar ao Normal' : 'Inverter Mundos';
        }
    }

    // Adiciona o listener diretamente ao botão
    theme.button.addEventListener('click', switchTheme);
    // Validação simples do formulário (sem envio via JS)
    const form = document.getElementById('clubForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            const formData = {
                name: document.getElementById('txtName').value.trim(),
                email: document.getElementById('txtEmail').value.trim(),
                level: document.getElementById('txtLevel').value.trim(),
                character: document.getElementById('txtCharacter').value.trim()
            };

            const errors = [];
            
            if (formData.name.length < 3) errors.push('Nome deve ter pelo menos 3 caracteres');
            if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.push('E-mail inválido');
            if (isNaN(formData.level) || formData.level < 1 || formData.level > 20) errors.push('Level deve ser um número entre 1 e 20');
            if (formData.character.length < 10) errors.push('Descrição do personagem deve ter pelo menos 10 caracteres');

            if (errors.length > 0) {
                alert('Por favor, corrija os seguintes erros:\n' + errors.join('\n'));
                event.preventDefault();
                return false;
            }

            // Se tudo ok, deixar o formulário submeter normalmente para o FormSubmit
            return true;
        });
    }
};