# 🏠 House Vintage - Application de Gestion

## 📌 Description
**House Vintage** est une application web multi-utilisateur (admin, vendeurs, client) conçue pour gérer un catalogue d'articles vintages. Elle permet aux utilisateurs d'explorer et d'acheter des objets uniques tout en fournissant une gestion centralisée des stocks et des commandes.

## 🚀 Fonctionnalités
- ✅ Gestion des articles et des catégories 📦
- ✅ Ajout, modification et suppression de produits 🛠️
- ✅ Gestion des commandes et des utilisateurs 🛒
- ✅ Connexion à une base de données SQL 📊
- ✅ Interfaces web dynamique (NextJS)

## 🏗️ Architecture du projet
- 📂 **Backend : `./the-vintage-house/pages/api/`** - Gestion des routes et API
- 📂 **Base de données : MYSQL  `./THE VINTAGE HOUSE.sql`** - Stockage des articles et commandes
- 📂 **Frontend : NextJS**  - 3 Interfaces utilisateur (Admin, Vendeurs, Clients)
- 📂 `package.json` - Dépendances du projet
- 📂 `items.sql` - Script SQL pour initialiser la base de données
- 📂 `dbdiagram.png` - Schéma de la base de données

## 🔧 Installation & Exécution

### 1️⃣ Cloner le repository
```bash
git clone https://github.com/amyeben/house-vintage.git
cd house-vintage
```

### 2️⃣ Installer les dépendances
```bash
npm install
```

### 3️⃣ Configurer la base de données
- Importer `items.sql` dans votre base de données SQL.
- Vérifier la configuration du fichier `.env` (ajouter les accès à la base SQL si nécessaire).

### 4️⃣ Démarrer le serveur
```bash
npm start
```

## 🌐 API Endpoints (Exemples)
| Méthode  | Endpoint        | Description                |
|----------|----------------|----------------------------|
| GET      | `/items`        | Liste des articles         |
| POST     | `/items`        | Ajouter un nouvel article  |
| PUT      | `/items/:id`    | Modifier un article        |
| DELETE   | `/items/:id`    | Supprimer un article       |

## 👨‍💻 Technologies utilisées
- **PHP** - Backend API
- **SQL** (MySQL/PostgreSQL)
- **Possiblement un framework frontend (NextJS)**

## 📬 Contact
**Auteur** : Amy Eben Sang Kotta  
📌 Retrouvez-moi sur [GitHub](https://github.com/amyeben) et [LinkedIn](https://linkedin.com/in/amy-eben) !

