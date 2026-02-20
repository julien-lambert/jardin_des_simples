# Jardin des simples — GitHub Pages + Jekyll (rendu Markdown correct)

Ce dépôt suit la structure Jekyll minimale (nécessaire pour avoir un vrai layout + CSS propre).

## Fichiers
- `index.md` : ton contenu (Markdown pur)
- `_layouts/default.html` : le template HTML (charge le CSS + les polices)
- `assets/css/style.scss` : ton CSS (Jekyll génère `assets/css/style.css`)
- `_config.yml` : configuration + thème `minima` (base)

## Activation GitHub Pages
Settings → Pages → Source: Deploy from a branch → Branch: `main` → Folder: `/(root)` → Save.

## Important
- Ne mets pas de `.nojekyll`.
- Supprime tout workflow `.github/workflows/*` (laisse Pages gérer le build Jekyll).
