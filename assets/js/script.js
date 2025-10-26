
(function(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  btn?.addEventListener('click', ()=>{
    const open = nav.getAttribute('data-open')==='true';
    nav.setAttribute('data-open', String(!open));
    btn.setAttribute('aria-expanded', String(!open));
  });
})();
