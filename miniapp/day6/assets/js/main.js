var dheight = $(document).innerHeight();
var wheight = $(window).innerHeight();

const log = document.getElementById('log');
const log2 = document.getElementById('log2');

let nowscrollTop = document.getElementById("body").scrollTop;


log.textContent = `scrollTop:${nowscrollTop}`;

window.addEventListener('scroll', () => {

  let scrollTop = document.scrollingElement.scrollTop;
  log.textContent = `scrollTop:${scrollTop}`;

  var login = log.innerHeight();
  var now = scrollTop - login;
  var tage = (now / dheight) * 100;
  console.log(now);
  console.log(dheight);
  var parcent = Math.round(tage);
  log.textContent = `最後まで:${parcent}%`;


  if (scrollTop > 200) {
    document.getElementById("body").classList.add("bk-hah");
  } else {
    document.getElementById("body").classList.remove("bk-hah");
  }
  
}, false);