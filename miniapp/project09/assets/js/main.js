var box = document.getElementById('box');

function trans() {
  if(box.className == "" || box.className == null) {
    box.classList.add('active');
  } else {
    box.classList.remove('active');
  } 
}
box.addEventListener('click', trans);