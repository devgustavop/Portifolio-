document.addEventListener('DOMContentLoaded', function() {
    // Selecionando elementos do DOM para o menu
    var menuIcon = document.getElementById('menu-icon');
    var navbar = document.querySelector('.navbar'); // Alterado para querySelector para selecionar pela classe
    
    // Adicionando evento de clique ao ícone do menu
    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
    



    // Configurando links para os ícones sociais
    var links = [
        { selector: '.fa-linkedin', url: 'https://www.linkedin.com/in/gustavo-concei%C3%A7%C3%A3o-31747a308/' },
        { selector: '.fa-github', url: 'https://github.com/devgustavop?tab=repositories' },
        { selector: '.fa-x-twitter', url: 'https://twitter.com/seu-perfil' },
        { selector: '.fa-instagram', url: 'https://www.instagram.com/gustaav_dev' },
        { selector: '.fa-whatsapp', url: 'https://wa.link/sy5j0n' }
    ];

    links.forEach(function(link) {
        var icon = document.querySelector(link.selector);
        if (icon) {
            var parentAnchor = icon.parentElement;
            if (parentAnchor && parentAnchor.tagName.toLowerCase() === 'a') {
                parentAnchor.href = link.url;
                parentAnchor.target = '_blank';
            }
            icon.style.cursor = 'pointer';
        }
    });
    
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("linkedin-link").href = "https://www.linkedin.com/in/gustavo-concei%C3%A7%C3%A3o-31747a308/";
    document.getElementById("github-link").href = "https://github.com/yourprofile";
    document.getElementById("twitter-link").href = "https://twitter.com/yourprofile";
    document.getElementById("instagram-link").href = "https://www.instagram.com/yourprofile";
    document.getElementById("whatsapp-link").href = "https://wa.me/yourphonenumber";
});
