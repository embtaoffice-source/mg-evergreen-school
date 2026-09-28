const burger=document.getElementById('burger');
const links=document.getElementById('navLinks');
if(burger&&links){burger.addEventListener('click',()=>links.classList.toggle('open'));links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));}
function sendMail(e){e.preventDefault();
const n=document.getElementById('fName').value.trim();
const p=document.getElementById('fPhone').value.trim();
const s=document.getElementById('fSubject').value.trim()||'Website Enquiry';
const m=document.getElementById('fMsg').value.trim();
const body=encodeURIComponent(`Name: ${n}\nPhone: ${p}\n\n${m}`);
window.location.href=`mailto:mgevergreenhrsschool@gmail.com?subject=${encodeURIComponent(s)}&body=${body}`;
return false;}
const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lbImg');
document.querySelectorAll('.gal img').forEach(img=>{img.addEventListener('click',()=>{lbImg.src=img.src;lb.classList.add('open')})});
if(lb){lb.addEventListener('click',()=>lb.classList.remove('open'));document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});}
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{threshold:.12});
document.querySelectorAll('.card,.img-card,.c-card,.stream,.quote-card').forEach(el=>{el.classList.add('reveal');io.observe(el)});
