
(function(){
  function addSocialApps(){
    if(document.querySelector('.banzs-social-apps')) return;
    const root=document.querySelector('main') || document.querySelector('#root > *') || document.body;
    const box=document.createElement('section');
    box.className='banzs-social-apps banzs-social-apps--mini';
    box.innerHTML='<a class="banzs-mini-instagram" href="https://www.instagram.com/vlsihub_banzsteam" target="_blank" rel="noopener" aria-label="Open BANZS Team Instagram"><span class="banzs-social-icon instagram">◎</span><strong>@vlsihub_banzsteam</strong></a>';
    root.appendChild(box);
  }
  window.addEventListener('load',addSocialApps);
  new MutationObserver(()=>setTimeout(addSocialApps,160)).observe(document.documentElement,{childList:true,subtree:true});
})();
