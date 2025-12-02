# Instructions d'Installation et d'Utilisation

## 🚀 Démarrage Rapide

1. **Installer les dépendances** :
```bash
npm install
```

2. **Lancer le serveur de développement** :
```bash
npm run dev
```

Le portfolio sera accessible sur `http://localhost:5173`

## 📸 Ajouter votre Photo de Profil

1. Placez votre photo dans le dossier `public/`
2. Nommez-la `profile.jpg`
3. Format recommandé : carré (512x512px ou plus)
4. Si l'image n'est pas trouvée, un placeholder avec vos initiales s'affichera automatiquement

## 📄 Ajouter votre CV

1. Placez votre CV dans le dossier `public/`
2. Nommez-le `cv.pdf`
3. Le bouton "Télécharger CV" dans la section Hero pointera automatiquement vers ce fichier

## 🔗 Personnaliser les Liens

### Liens Sociaux (Hero & Footer)
Modifiez les URLs dans :
- `src/components/Hero.jsx` (ligne ~15-25)
- `src/components/Footer.jsx` (ligne ~15-25)

### Liens des Projets
Modifiez les URLs dans `src/components/Projects.jsx` :
- `github` : lien vers le repository GitHub
- `demo` : lien vers la démo en ligne

### Liens des Certifications
Modifiez les URLs dans `src/components/Certifications.jsx` (ligne ~50)

## 🎨 Personnaliser les Couleurs

Les couleurs sont définies dans `tailwind.config.js` :
- `navy` : #1e3a8a (bleu marine)
- `violet` : #8b5cf6 (violet doux)
- `light-gray` : #f3f4f6 (gris clair)

## 📝 Modifier le Contenu

### Informations Personnelles
- **Hero** : `src/components/Hero.jsx`
- **À Propos** : `src/components/About.jsx`
- **Contact** : `src/components/Contact.jsx`

### Formation
Modifiez le tableau `education` dans `src/components/Education.jsx`

### Expériences
Modifiez le tableau `experiences` dans `src/components/Experience.jsx`

### Projets
Modifiez le tableau `projects` dans `src/components/Projects.jsx`

### Compétences
Modifiez le tableau `skillCategories` dans `src/components/Skills.jsx`
- Ajustez les niveaux (0-100) pour chaque compétence

### Certifications
Modifiez le tableau `certifications` dans `src/components/Certifications.jsx`

## 🏗️ Build pour Production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

## 📦 Déploiement

### Vercel (Recommandé)
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Vite
3. Déployez !

### Netlify
1. Connectez votre repository GitHub à Netlify
2. Build command : `npm run build`
3. Publish directory : `dist`

### GitHub Pages
1. Installez `gh-pages` : `npm install --save-dev gh-pages`
2. Ajoutez dans `package.json` :
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Déployez : `npm run deploy`

## 🐛 Résolution de Problèmes

### Le curseur personnalisé ne fonctionne pas
- C'est normal sur les appareils tactiles (mobile/tablette)
- Le curseur est désactivé automatiquement sur ces appareils

### Les animations ne fonctionnent pas
- Vérifiez que toutes les dépendances sont installées : `npm install`
- Videz le cache : `npm run build -- --force`

### L'image de profil ne s'affiche pas
- Vérifiez que le fichier est bien nommé `profile.jpg` dans `public/`
- Vérifiez le format (JPG, PNG, WebP)
- Un placeholder s'affichera automatiquement si l'image est introuvable

## 📱 Responsive Design

Le portfolio est entièrement responsive :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

Toutes les sections s'adaptent automatiquement à la taille de l'écran.

## ✨ Fonctionnalités

- ✅ Smooth scroll entre sections
- ✅ Animations au scroll (fade-in, slide-up)
- ✅ Cursor personnalisé (desktop uniquement)
- ✅ Navigation sticky avec effet glassmorphism
- ✅ Loading animation
- ✅ Formulaire de contact fonctionnel
- ✅ Mode responsive complet
- ✅ Effets hover sur tous les éléments interactifs

## 📧 Support

Pour toute question ou problème, n'hésitez pas à ouvrir une issue sur GitHub.

