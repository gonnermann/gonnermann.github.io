// Mobile menu
(function(){
  var b=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
  if(b)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
})();
// Photo viewer: click a gallery photo to enlarge; arrow keys move, Esc closes
(function(){
  var links=[].slice.call(document.querySelectorAll('.gallery a, a.zoom'));
  if(!links.length)return;
  var box=document.createElement('div');box.className='lightbox';
  box.innerHTML='<button class="lb-close" aria-label="Close">&times;</button><button class="lb-prev" aria-label="Previous">&#8249;</button><img alt=""><p></p><button class="lb-next" aria-label="Next">&#8250;</button>';
  document.body.appendChild(box);
  var im=box.querySelector('img'),cap=box.querySelector('p'),i=0;
  function show(k){i=(k+links.length)%links.length;im.src=links[i].href;cap.textContent=links[i].getAttribute('data-caption')||'';box.classList.add('open')}
  function close(){box.classList.remove('open');im.src=''}
  links.forEach(function(a,k){a.addEventListener('click',function(e){e.preventDefault();show(k)})});
  box.querySelector('.lb-close').onclick=close;
  box.querySelector('.lb-prev').onclick=function(e){e.stopPropagation();show(i-1)};
  box.querySelector('.lb-next').onclick=function(e){e.stopPropagation();show(i+1)};
  box.addEventListener('click',function(e){if(e.target===box)close()});
  document.addEventListener('keydown',function(e){if(!box.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)});
})();
