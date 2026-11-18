(function(){
var d=document,b=d.body,bur=d.getElementById('burger');
bur.addEventListener('click',function(){var o=b.classList.toggle('otwarte');bur.setAttribute('aria-expanded',o);bur.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu');});
d.querySelectorAll('#menu a').forEach(function(a){a.addEventListener('click',function(){b.classList.remove('otwarte');bur.setAttribute('aria-expanded','false');});});
// tory: przeciaganie myszą + strzalki
d.querySelectorAll('.tor').forEach(function(t){
 var x0=0,s0=0,down=false,moved=false;
 t.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;moved=false;x0=e.clientX;s0=t.scrollLeft;});
 window.addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-x0;if(Math.abs(dx)>5){moved=true;t.classList.add('ciag');}t.scrollLeft=s0-dx;});
 window.addEventListener('pointerup',function(){if(!down)return;down=false;t.classList.remove('ciag');});
 t.addEventListener('click',function(e){if(moved){e.preventDefault();moved=false;}},true);
 t.addEventListener('dragstart',function(e){e.preventDefault();});
});
d.querySelectorAll('.strzalki button').forEach(function(btn){btn.addEventListener('click',function(){var t=d.getElementById(btn.dataset.tor),k=t.querySelector('.karta');t.scrollBy({left:(k.offsetWidth+20)*btn.dataset.k,behavior:'smooth'});});});
// mapa po przewinieciu
var m=d.getElementById('mapa');
if(m&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(en){if(en[0].isIntersecting){var f=d.createElement('iframe');f.src=m.dataset.src;f.title='Mapa dojazdu do salonu Mariees';f.loading='lazy';f.referrerPolicy='no-referrer-when-downgrade';m.appendChild(f);io.disconnect();}},{rootMargin:'300px'});io.observe(m);}
// formularz pokazowy
var f=d.getElementById('form');f.addEventListener('submit',function(e){e.preventDefault();f.querySelector('.ok').classList.add('widac');});
})();
