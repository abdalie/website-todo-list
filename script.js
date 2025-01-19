let taches = [];
const inputTache = document.getElementById('tache');
const btnAjouter = document.getElementById('ajouter');
const listeAFaire = document.getElementById('liste-a-faire');
const listeAccomplies = document.getElementById('liste-accomplies');

// Ajouter une tâche
btnAjouter.addEventListener('click', () => {
    const texteTache = inputTache.value.trim();
    if (texteTache) {
        taches.push({ texte: texteTache, cochee: false, date: new Date().toLocaleDateString() });
        inputTache.value = '';
        mettreAJourListe();
    }
});

// Mettre à jour la liste
function mettreAJourListe() {
    listeAFaire.innerHTML = '';
    listeAccomplies.innerHTML = '';
    const tachesAFaire = taches.filter(tache => !tache.cochee);
    const tachesAccomplies = taches.filter(tache => tache.cochee);
    
    tachesAFaire.forEach((tache, index) => {
        const elementListe = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tache.cochee;
        checkbox.addEventListener('change', () => {
            taches[index].cochee = checkbox.checked;
            mettreAJourListe();
        });
        elementListe.innerHTML = `${index + 1}. ${tache.texte}`;
        elementListe.prepend(checkbox);
        listeAFaire.appendChild(elementListe);
    });
    
    tachesAccomplies.forEach((tache, index) => {
        const elementListe = document.createElement('li');
        elementListe.innerHTML = `${index + 1}. ${tache.texte} (faite le ${tache.date})`;
        listeAccomplies.appendChild(elementListe);
    });
}
