document.addEventListener('DOMContentLoaded', function () {
    const problemSelect = document.getElementById('problem-type');
    const problemParameters = document.getElementById('problem-parameters');
    const problemParametersList = document.getElementById('problem-parameters-list');

    const databaseSelect = document.getElementById('database-type');
    const databaseSection = document.getElementById('database-section');

    const methodSelect = document.getElementById('method');
    const methodSection = document.getElementById('method-section');
    const methodParameters = document.getElementById('method-parameters');
    const methodParametersList = document.getElementById('method-parameters-list');

    const submitBtn = document.getElementById('submit-btn');

    // Options pour les paramètres des problèmes
    const problemOptions = {
        CVRP: ["Capacité des véhicules", "Nombre de clients"],
        VRPTW: ["Fenêtres de temps", "Nombre de véhicules"],
        DVRP: ["Demandes dynamiques", "Nombre de centres logistiques"],
    };

    // Options pour les paramètres des méthodes
    const methodOptions = {
        exact: ["Temps maximum de calcul", "Tolérance d'optimalité"],
        metaheuristic: ["Nombre d'itérations", "Population initiale"],
    };

    // Afficher les paramètres du problème choisi
    problemSelect.addEventListener('change', function () {
        const selectedProblem = problemSelect.value;
        if (selectedProblem) {
            problemParametersList.innerHTML = "";
            problemOptions[selectedProblem].forEach(param => {
                const label = document.createElement('label');
                label.textContent = param;

                const input = document.createElement('input');
                input.type = "text";
                input.name = param;

                const div = document.createElement('div');
                div.appendChild(label);
                div.appendChild(input);

                problemParametersList.appendChild(div);
            });
            problemParameters.classList.remove('hidden');
            databaseSection.classList.remove('hidden');
        }
    });

    // Afficher la section méthode après le choix de la base de données
    databaseSelect.addEventListener('change', function () {
        if (databaseSelect.value) {
            methodSection.classList.remove('hidden');
        }
    });

    // Afficher les paramètres de la méthode choisie
    methodSelect.addEventListener('change', function () {
        const selectedMethod = methodSelect.value;
        if (selectedMethod) {
            methodParametersList.innerHTML = "";
            methodOptions[selectedMethod].forEach(param => {
                const label = document.createElement('label');
                label.textContent = param;

                const input = document.createElement('input');
                input.type = "text";
                input.name = param;

                const div = document.createElement('div');
                div.appendChild(label);
                div.appendChild(input);

                methodParametersList.appendChild(div);
            });
            methodParameters.classList.remove('hidden');
            submitBtn.classList.remove('hidden');
        }
    });
});
