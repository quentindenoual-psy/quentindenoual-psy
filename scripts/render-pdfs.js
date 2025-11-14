// Liste manuelle de tes PDF à afficher :
const pdfFiles = [
  { file: 'terv-information.pdf', title: 'Présentation de la TERV' },
  { file: 'tcc-guide.pdf', title: 'Guide pratique des TCC' },
  { file: 'relaxation-fiche.pdf', title: 'Fiche d\'exercice — Relaxation' }
];

// 📄 Dossier racine où se trouvent tes PDF
const pdfBasePath = '../assets/pdfs/';
const gallery = document.getElementById('pdfGallery');

// Fonction utilitaire pour créer la vignette
async function renderPdfThumbnail(pdfPath, title) {
  const container = document.createElement('div');
  container.className = 'resource-card';
  

  try {
    const pdf = await pdfjsLib.getDocument(pdfPath).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 0.5 });
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvasContext: ctx, viewport }).promise;

    const img = document.createElement('img');
    img.src = canvas.toDataURL('image/png');
    img.alt = title;
    container.appendChild(img);

    const meta = document.createElement('div');
    meta.className = 'r-meta';
    meta.innerHTML = `<strong>${title}</strong><br>
      <a href="${pdfPath}" class="btn small" download>Télécharger le PDF</a>`;
    container.appendChild(meta);
  } catch (err) {
    console.error('Erreur PDF.js', err);
    container.innerHTML = `<div style="padding:1rem">Impossible d'afficher ${title}</div>`;
  }

  gallery.appendChild(container);
}

// Génère toutes les vignettes
pdfFiles.forEach(pdf => renderPdfThumbnail(pdfBasePath + pdf.file, pdf.title));
