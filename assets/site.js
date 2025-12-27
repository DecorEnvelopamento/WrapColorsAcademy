(function(){
  // Language switcher: remember choice
  const sel = document.querySelector('[data-lang-select]');
  if(sel){
    sel.addEventListener('change', (e)=>{
      const v = e.target.value;
      try{ localStorage.setItem('wc_lang', v); }catch(_){}
      const base = document.documentElement.getAttribute('data-base') || '';
      // base is like "" or ".." depending on nesting
      if(v==='pt') location.href = base + '/pt/';
      if(v==='en') location.href = base + '/en/';
      if(v==='es') location.href = base + '/es/';
    });
    // preselect based on current lang page
    const cur = document.documentElement.getAttribute('lang') || 'pt';
    if(cur.startsWith('pt')) sel.value = 'pt';
    else if(cur.startsWith('en')) sel.value = 'en';
    else if(cur.startsWith('es')) sel.value = 'es';
  }
})();
