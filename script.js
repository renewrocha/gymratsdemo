document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    
    // Verifica se a imagem da logo está completamente carregada
    logo.onload = function() {
        // Inicia o fade-out após a imagem estar completamente carregada
        setTimeout(function() {
            document.getElementById('loading-screen').style.animation = 'fadeOut 3s forwards ease-in-out';
        }, 100); // Pequeno delay para garantir o início suave

        // Transição para o conteúdo principal após 3 segundos da animação
        setTimeout(function() {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 3000);
    };

    // No caso da logo já estar em cache (carregada previamente)
    if (logo.complete) {
        logo.onload();
    }

    // Adiciona um atraso antes de redirecionar para outra página ao clicar
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o redirecionamento imediato
            const link = this.getAttribute('href');
            setTimeout(function() {
                window.location.href = link; // Redireciona após 1 segundo
            }, 1000);
        });
    });
});
