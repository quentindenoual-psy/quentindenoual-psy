
// Requires pdf.js from CDN in the page where used
(async function(){
  const items = document.querySelectorAll('[data-pdf]');
  if(!items.length || !window['pdfjsLib']) return;
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  for (const el of items) {
    const url = el.getAttribute('data-pdf');
    const canvas = el.querySelector('canvas');
    if(!canvas) continue;
    try {
      const pdf = await pdfjsLib.getDocument(url).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 0.8 });
      const ctx = canvas.getContext('2d');
      canvas.width = viewport.width; canvas.height = viewport.height;
      await page.render({ canvasContext: ctx, viewport }).promise;
    } catch (e) {
      el.querySelector('.fallback').style.display = 'grid';
      console.warn('Cannot render PDF thumb', url, e);
    }
  }
})();
