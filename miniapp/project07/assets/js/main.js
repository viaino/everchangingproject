// ページのどこまで読み進めたのか％で表示
var scnow = document.getElementById('scnow');
var scmax = document.getElementById('scmax');
var percent = document.getElementById('percent');

ymax = document.documentElement.getBoundingClientRect().height - window.innerHeight;
scmax.textContent = ymax;


window.addEventListener('scroll', () => {
  let scrollTop = document.scrollingElement.scrollTop;
  scnow.textContent = scrollTop;


  per = Math.round(Number(scnow.textContent) / ymax * 100);
  // per = Math.round(Number(scnow.textContent) / ymax);
  percent.textContent = per + "%";
  console.log(per);
}, false);