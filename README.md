
🥗 Salad Recipe App
Une application simple de recettes de salades construite avec Next.js, TypeScript, Tailwind CSS, et DaisyUI.

📖 Description
Cette application affiche plusieurs recettes de salades avec leurs ingrédients, étapes, et images. Elle permet aux utilisateurs de découvrir différentes recettes en mettant en avant un style moderne et élégant grâce à Tailwind CSS et DaisyUI.

🚀 Technologies Utilisées
Next.js : Framework React pour des applications web performantes.
TypeScript : Superset de JavaScript offrant des types statiques.
Tailwind CSS : Framework CSS utilitaire pour un design rapide et flexible.
DaisyUI : Composants UI stylisés pour Tailwind CSS.
📂 Structure du Projet

.
├── app
│   ├── page.tsx           # Page principale qui affiche les recettes
├── public
│   ├── images              # Dossier des images des recettes
│   ├── recipes.json        # Données JSON des recettes
├── styles
│   ├── globals.css         # Fichier CSS global incluant Tailwind et DaisyUI
├── tailwind.config.js      # Configuration de Tailwind CSS et DaisyUI
└── README.md               # Documentation du projet

🛠️ Installation et Configuration
Suivez ces étapes pour lancer le projet en local :

Prérequis
Node.js et npm installés
Git installé (facultatif)
Étapes d'installation
Clonez ce dépôt :

bash
Copier le code
git clone https://github.com/fakriaya/SaladRecipeNextJs.git
cd SaladRecipeApp
Installez les dépendances :

bash
Copier le code
npm install
Lancez le serveur de développement :

bash
Copier le code
npm run dev
Accédez à l'application à l'adresse http://localhost:3000.

🖼️ Aperçu de l'Application
Une fois le projet lancé, vous verrez une liste de recettes de salades avec des images et des boutons pour en apprendre plus sur chaque recette.

🧩 Fonctionnalités
Affichage des recettes de salades avec des images
Visualisation des ingrédients et des instructions de préparation pour chaque recette
Utilisation de DaisyUI pour des composants stylisés (boutons, cartes, etc.)
🖌️ Styles et Design
L'application utilise Tailwind CSS pour un design réactif et moderne, et DaisyUI pour les composants de l'interface utilisateur :

Boutons et cartes stylisés pour une apparence agréable.
Disposition réactive adaptée pour les appareils mobiles et ordinateurs.
📝 Données des Recettes
Les recettes sont stockées dans un fichier recipes.json dans le dossier public. Chaque recette comprend :

name: Le nom de la recette
description: Une description courte de la recette
ingredients: Liste d'ingrédients
steps: Étapes de préparation
image: URL de l'image de la recette

Exemple de données JSON :

[
  {
    "name": "Salade César",
    "description": "Une salade classique avec des croûtons et du parmesan.",
    "ingredients": ["Laitue romaine", "Croûtons", "Parmesan", "Sauce César"],
    "steps": ["Lavez la laitue", "Ajoutez les croûtons et le parmesan", "Versez la sauce César"],
    "image": "/images/salade_cesar.jpg"
  }
]
📑 Notes
Les images des recettes doivent être placées dans le dossier public/images.
Assurez-vous que le nom de chaque image correspond au chemin défini dans recipes.json.
📜 Licence
Ce projet est sous licence libre. Vous êtes libre de le modifier et de le redistribuer.

📬 Contact
Pour toute question ou suggestion, n'hésitez pas à me contacter par fakriaya12@gmail.com .