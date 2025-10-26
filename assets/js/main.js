
(function(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if(btn && nav){
    btn.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      btn.setAttribute('aria-expanded', String(!open));
    });
  }
})();
