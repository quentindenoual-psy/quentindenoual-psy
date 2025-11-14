<!-- ce fichier contient un exemple d'utilisation : inclure pdfjs via CDN dans la page ressources -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>
<script>
const input = document.getElementById('pdfInput');
const thumbs = document.getElementById('thumbs');

if(input){
  input.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if(!file) return;
    const arrayBuffer = await file.arrayBuffer();
    const uint8 = new Uint8Array(arrayBuffer);
    const loadingTask = pdfjsLib.getDocument({data: uint8});
    loadingTask.promise.then(async (pdf) => {
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({scale:1});
      const scale = 300 / viewport.width;
      const scaled = page.getViewport({scale});
      const canvas = document.createElement('canvas');
      canvas.width = scaled.width;
      canvas.height = scaled.height;
      const ctx = canvas.getContext('2d');
      await page.render({canvasContext: ctx, viewport: scaled}).promise;
      const img = document.createElement('img');
      img.src = canvas.toDataURL('image/png');
      img.alt = file.name;
      img.style.maxWidth = '100%';
      thumbs.innerHTML = '';
      thumbs.appendChild(img);

      // Ici tu peux envoyer file via fetch() vers ton API pour stockage
    }).catch(err => {
      console.error(err);
      alert('Impossible de générer la vignette (PDF corrompu ou navigateur incompatible).');
    });
  });
}
</script>
