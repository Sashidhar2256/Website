
(function(){
  function showChoiceResult(){
    document.body.classList.add('asic-flow-option-selected');
    setTimeout(function(){
      var target=document.querySelector('.asic-flow-session-head.compact') || document.querySelector('.asic-flow-pages');
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    },180);
  }
  function resetIfLeaving(){
    if(!document.querySelector('.asic-flow-session')) document.body.classList.remove('asic-flow-option-selected');
  }
  document.addEventListener('click', function(event){
    if(event.target.closest('.flow-choice-buttons button')) showChoiceResult();
    setTimeout(resetIfLeaving, 250);
  }, true);
  window.addEventListener('load', resetIfLeaving);
})();
