document.addEventListener('DOMContentLoaded', function() {
    var links = [
        { selector: '.fa-linkedin', url: 'https://www.linkedin.com/in/gustavo-concei%C3%A7%C3%A3o-31747a308/' },
        { selector: '.fa-github', url: 'https://github.com/devgustavop?tab=repositories' },
        { selector: '.fa-x-twitter', url: 'https://twitter.com/seu-perfil' },
        { selector: '.fa-instagram', url: 'https://www.instagram.com/seu-perfil' },
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

