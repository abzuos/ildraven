document.addEventListener("DOMContentLoaded", function () {
    const titreSite = document.querySelector('header h1');
    titreSite.style.opacity = 0;

    window.addEventListener('scroll', function () {
        const scrolled = window.scrollY;
        const limit = document.documentElement.clientHeight / 2;

        if (scrolled > limit) {
            titreSite.style.opacity = 1;
            titreSite.style.transform = 'translateY(0)';
        } else {
            const opacity = scrolled / limit;
            titreSite.style.opacity = opacity;
            titreSite.style.transform = `translateY(${50 - 50 * opacity}px)`;
        }
    });

    const liensMenu = document.querySelectorAll('nav ul li a');

    liensMenu.forEach(function (lien) {
        lien.addEventListener('mouseover', function () {
            this.style.color = '#8B4513'; // Marron
        });

        lien.addEventListener('mouseout', function () {
            this.style.color = '#000000'; // Noir
        });
    });

    const competencesListe = document.getElementById('competences-list');

    const competences = ['HTML', 'CSS', 'JavaScript', 'Web Design', 'Node.js'];

    competences.forEach(function (competence) {
        const nouvelleCompetence = document.createElement('li');
        nouvelleCompetence.textContent = competence;
        competencesListe.appendChild(nouvelleCompetence);
    });
});
