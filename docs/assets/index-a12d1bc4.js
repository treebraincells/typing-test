(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();let u=["the","of","and","to","in","is","be","that","was","he","for","it","with","as","his","on","have","at","by","not","they","this","had","are","but","from","or","which","one","you","would","all","will","there","when","up","what","out","about","who","get","if","can","my","would","her","say","an","we","home","like","other","how","then","them","these","so","some","her","make","him","into","time","has","look","two","more","write","go","see","number","way","could","people","than"],m=u.sort(()=>.5-Math.random()),a=document.querySelector("#testtext"),f=m.join(" ");a.innerHTML=f;a.onclick=()=>{l.focus()};let l=document.getElementById("testinput"),d=document.getElementById("countdown"),c="",h=document.getElementById("score");function p(){a.style.filter="none",d.innerHTML="00:15",l.focus(),l.value="",l.addEventListener("input",y)}function y(t){t.target.value.charAt(0)==t.target.value&&g(),c=t.target.value}function g(){let t=14,o=setInterval(()=>{t-=1,d.innerHTML="00:"+(t<9?"0":"")+(t+1),t==0&&(clearInterval(o),w())},1e3)}function w(){l.readOnly=!0;let t=c.split(" "),o=0;t.forEach((n,s)=>{n==u[s]&&o++});let r=o*4,i=(r/60).toFixed(2),e=(c.length/60).toFixed(2);L(r,i,e)}function L(t,o,r){document.getElementById("wpmdisplay").innerHTML=t,document.getElementById("wpsdisplay").innerHTML=`<span class="green">${o}</span> word${o>1?"s":""} per second`,document.getElementById("cpsdisplay").innerHTML=`<span class="green">${r}</span> character${o>1?"s":""} per second`,h.showModal()}document.getElementById("startbtn").onclick=p;
