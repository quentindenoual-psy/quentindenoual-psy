
# Site de Quentin Denoual — Psychologue à Grenoble (TCC, TERV)

Site statique minimaliste, responsive, déployé sur GitHub Pages.

## Pages
- `index.html` — Accueil
- `about.html` — Ma présentation
- `tcc.html` — Présentation des TCC
- `terv-vr.html` — Présentation de la TERV et de la VR
- `ressources.html` — Galerie de PDFs (miniature = page 1 via pdf.js)
- `contact.html` — Contact (mailto ou Formspree)

## Démarrage
1. **Cloner** ce dossier ou le zipper et extraire.
2. Ouvrir dans **VS Code** → extension *Live Server* pour prévisualiser.
3. Pousser sur GitHub (branche `main`) et activer **Settings → Pages** (Source : `Deploy from a branch`, dossier `/root`).

## Ajouter un PDF
1. Copier votre fichier dans `assets/pdfs/`.
2. Dans `ressources.html`, dupliquer le bloc `<a class="card" ...>` et mettre l’URL du PDF.

## Changer l’email
- Éditer `contact.html` et remplacer `prenom.nom@example.com` par votre adresse.

## Personnaliser
- Couleurs et typo → `assets/css/main.css`
- Navigation → `_config.yml` (section `nav`)

## Crédit
- Miniatures PDF générées côté client via [pdf.js](https://mozilla.github.io/pdf.js/).
