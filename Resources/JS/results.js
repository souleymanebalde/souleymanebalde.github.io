document.addEventListener('DOMContentLoaded', function () {
    // Initialisation de la carte
    const map = L.map('map').setView([33.5731, -7.5898], 13); // Centré sur Casablanca (position arbitraire)

    // Ajout d'une couche de tuiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Points arbitraires représentant les clients
    const points = [
        [33.5731, -7.5898],  // Dépôt
        [33.575, -7.590],    // Client 1
        [33.574, -7.585],    // Client 2
        [33.578, -7.587],    // Client 3
        [33.579, -7.591]     // Client 4
    ];

    // Marqueurs sur la carte
    points.forEach((point, index) => {
        L.marker(point).addTo(map)
            .bindPopup(index === 0 ? "Dépôt" : `Client ${index}`);
    });

    // Tracer une route arbitraire (dépôt -> client1 -> client2 -> client3 -> client4 -> dépôt)
    const route = [
        points[0], points[1], points[2], points[3], points[4], points[0]
    ];

    L.polyline(route, { color: 'blue', weight: 4 }).addTo(map)
        .bindPopup("Route de livraison")
        .openPopup();
});
