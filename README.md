# **PokeTeam Mobile** 📱✨

Bienvenue sur **PokeTeam Mobile** ! 🎮 Version mobile native de l'application **Poké-Team**, développée avec **React Native** et **Expo** pour iOS et Android.

> 🌐 **Version Web** : Découvrez la version web originale sur [poke-team.surge.sh](https://poke-team.surge.sh/)

---

## 📚 Description du projet

**PokeTeam Mobile** est une application mobile permettant de créer et gérer votre équipe de Pokémon favorite directement depuis votre smartphone. Parcourez le Pokédex, consultez les détails de chaque Pokémon et constituez l'équipe de vos rêves !

### ✨ Fonctionnalités principales

* 🔍 **Navigation intuitive** avec tabs (Accueil, Recherche, Équipe)
* 📜 **Liste complète des Pokémon** avec pagination infinie
* 🎴 **Cards élégantes** affichant les sprites, types et informations
* 📊 **Page de détails** avec sprites normaux/shiny, stats et caractéristiques
* ⭐ **Gestion d'équipe** pour sauvegarder vos Pokémon favoris
* 🎨 **Design moderne** avec interface fluide et responsive

---

## 🚀 Objectifs

* 💡 Appliquer **React Native** et **TypeScript** pour le développement mobile
* 🔄 Adapter l'expérience web en une application native performante
* 🎨 Créer une interface utilisateur optimisée pour mobile
* 📱 Explorer l'écosystème **Expo** et ses outils de développement
* 🔍 Gérer la navigation avec **Expo Router** (file-based routing)

---

## 🏗️ Technologies utilisées


| Technologie             | Description                                               |
| ----------------------- | --------------------------------------------------------- |
| **React Native**        | Framework pour applications mobiles natives               |
| **Expo**                | Plateforme pour simplifier le développement React Native |
| **TypeScript**          | Typage statique pour un code robuste                      |
| **Expo Router**         | Navigation basée sur le système de fichiers             |
| **Tyradex API**         | API française complète pour les données Pokémon       |
| **Lucide React Native** | Bibliothèque d'icônes modernes                          |

---

## 🛠️ Installation et exécution

### Prérequis

* **Node.js** (v18 ou supérieur)
* **npm** ou **yarn**
* **Expo Go** (application mobile pour tester)

### Étapes d'installation

1. **Cloner le dépôt**

```bash
git clone https://github.com/votre-utilisateur/poketeam-mobile.git
cd poketeam-mobile
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer l'application**

```bash
npx expo start
```

4. **Tester sur votre appareil**

* Scannez le QR code avec **Expo Go** (iOS/Android)
* Ou appuyez sur `i` pour iOS Simulator / `a` pour Android Emulator

## 🌟 Fonctionnalités implémentées

### ✅ Navigation

* [X]  Tab Navigation avec 3 onglets (Accueil, Recherche, Équipe)
* [X]  Navigation vers les détails des Pokémon
* [X]  Bouton retour avec titre personnalisé

### ✅ Liste des Pokémon

* [X]  Affichage de tous les Pokémon via l'API Tyradex
* [X]  Pagination infinie (chargement progressif de 20 Pokémon)
* [X]  Cards avec image, nom, numéro et types
* [X]  Filtrage du Pokémon #0

### ✅ Détails Pokémon

* [X]  Sprites normal et shiny
* [X]  Informations (catégorie, génération)
* [X]  Mensurations (poids, taille) avec icônes
* [X]  Badges de types avec images
* [X]  Design cohérent avec la liste

### 🚧 En développement

* [ ]  Recherche de Pokémon par nom/type
* [ ]  Sauvegarde de l'équipe (6 Pokémon max)
* [ ]  Système de favoris persistant
* [ ]  Filtres avancés (génération, type)
* [ ]  Mode sombre

---

## 🎨 Design & UX

L'application adopte un design moderne avec :

* **Cards blanches** sur fond gris clair
* **Ombres subtiles** pour la profondeur
* **Coins arrondis** pour un look moderne
* **Typographie hiérarchisée** pour la lisibilité
* **Badges colorés** pour les types de Pokémon
* **Icônes Lucide** pour les actions

---

## 📡 API utilisée

**Tyradex** - API Pokémon française complète

* **Endpoint principal** : `https://tyradex.app/api/v1/pokemon`
* **Détail Pokémon** : `https://tyradex.app/api/v1/pokemon/{id}`
* **Documentation** : [tyradex.tech](https://tyradex.tech/)

---

## 🔗 Liens du projet


| Lien                                                         | Description               |
| ------------------------------------------------------------ | ------------------------- |
| 🌐[Version Web](https://poke-team.surge.sh/)                 | Application web originale |
| 💻[Repo Web](https://github.com/votre-utilisateur/poke-team) | Code source version web   |
| 📱 Repo Mobile                                               | Ce dépôt                |

---

## 💬 Contact

Pour toute question, suggestion ou contribution :

* **Email** : aurelie.moustardier@outlook.fr
* **LinkedIn** : [Mon Profil](https://www.linkedin.com/in/votre-profil/)
* **GitHub** : [Mon GitHub](https://github.com/votre-utilisateur)

---

## 📄 Licence

Ce projet est développé à des fins éducatives et de portfolio.

---

**Merci de votre intérêt pour PokeTeam Mobile !** 🚀✨

*Attrapez-les tous... sur mobile !* 📱⚡
