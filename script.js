document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    checkAuth();

    // Get user data
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.querySelector('.user-name').textContent = user.name;
    }

    // Navigation handling
    const navItems = document.querySelectorAll('.nav-item');
    const pageTitle = document.getElementById('page-title');
    const mainContent = document.getElementById('main-content');

    // Pages content
    const pages = {
        dashboard: `
            <div class="dashboard-grid">
                <div class="card">
                    <h3>Niveau de stock</h3>
                    <div class="stat">
                        <span class="number">1,234</span>
                        <span class="label">produits</span>
                    </div>
                </div>
                <div class="card">
                    <h3>Woofers présents</h3>
                    <div class="stat">
                        <span class="number">42</span>
                        <span class="label">personnes</span>
                    </div>
                </div>
                <div class="card">
                    <h3>Ventes du mois</h3>
                    <div class="stat">
                        <span class="number">€8,745</span>
                        <span class="label">revenus</span>
                    </div>
                </div>
                <div class="card">
                    <h3>Ateliers planifiés</h3>
                    <div class="stat">
                        <span class="number">12</span>
                        <span class="label">ce mois</span>
                    </div>
                </div>
            </div>
        `,
        stock: `
            <div class="dashboard-grid">
                <div class="card">
                    <h3>Catégorie 1</h3>
                    <div class="stat">
                        <span class="number">150</span>
                        <span class="label">articles</span>
                    </div>
                </div>
                <div class="card">
                    <h3>Catégorie 2</h3>
                    <div class="stat">
                        <span class="number">320</span>
                        <span class="label">articles</span>
                    </div>
                </div>
                <div class="card">
                    <h3>Catégorie 3</h3>
                    <div class="stat">
                        <span class="number">89</span>
                        <span class="label">articles</span>
                    </div>
                </div>
                <div class="card">
                    <h3>Catégorie 4</h3>
                    <div class="stat">
                        <span class="number">675</span>
                        <span class="label">articles</span>
                    </div>
                </div>
            </div>
        `,
        sales: `
            <div class="card">
                <h3>Nouvelle Vente</h3>
                <form class="form-grid">
                    <div class="form-group">
                        <label>ID produit</label>
                        <input type="text" placeholder="Entrez l'ID du produit">
                    </div>
                    <div class="form-group">
                        <label>Quantité</label>
                        <input type="number" placeholder="Quantité">
                    </div>
                    <button type="submit" class="btn-primary">Ajouter</button>
                </form>
            </div>
        `,
        woofers: `
            <div class="card">
                <h3>Gestion des Woofers</h3>
                <form class="form-grid">
                    <div class="form-group">
                        <label>Nom</label>
                        <input type="text" placeholder="Nom">
                    </div>
                    <div class="form-group">
                        <label>Prénom</label>
                        <input type="text" placeholder="Prénom">
                    </div>
                    <div class="form-group">
                        <label>Date début séjour</label>
                        <input type="date">
                    </div>
                    <div class="form-group">
                        <label>Date fin séjour</label>
                        <input type="date">
                    </div>
                    <button type="submit" class="btn-primary">Ajouter</button>
                </form>
            </div>
        `,
        workshops: `
            <div class="card">
                <h3>Gestion des Ateliers</h3>
                <form class="form-grid">
                    <div class="form-group">
                        <label>Thème</label>
                        <input type="text" placeholder="Thème de l'atelier">
                    </div>
                    <div class="form-group">
                        <label>Date</label>
                        <input type="date">
                    </div>
                    <div class="form-group">
                        <label>Responsable atelier</label>
                        <input type="text" placeholder="Nom du responsable">
                    </div>
                    <button type="submit" class="btn-primary">Ajouter</button>
                </form>
            </div>
        `
    };

    // Navigation click handler
    navItems.forEach(item => {
        if (item.dataset.page) {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Update active state
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                
                // Update page title
                pageTitle.textContent = item.textContent.trim();
                
                // Update content
                mainContent.innerHTML = pages[item.dataset.page];
            });
        }
    });

    // Handle logout
    const logoutButton = document.querySelector('.logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
});