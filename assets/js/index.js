const burger = document.getElementById('burger');
 const menu = document.getElementById('menu');
    
        burger.addEventListener('click', () => {
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        });
    
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
            menu.style.display = 'none'; // Fermer le menu après la sélection
        }