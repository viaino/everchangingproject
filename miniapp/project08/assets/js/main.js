function changeColor() {
  var timing = 40; //　変化するタイミングを微調整する

  var scrollY = window.pageYOffset;
  var body = document.body;

  var trigger1 = document.getElementById('js-section-1');
  var trigger2 = document.getElementById('js-section-2');
  var trigger3 = document.getElementById('js-section-3');
  var trigger4 = document.getElementById('js-section-4');

  var trigger1Y = trigger1.getBoundingClientRect().top;
  var trigger2Y = trigger2.getBoundingClientRect().top;
  var trigger3Y = trigger3.getBoundingClientRect().top;
  var trigger4Y = trigger4.getBoundingClientRect().top;

  console.log(scrollY);
  console.log("trigger1Y：　" + trigger1Y);
  console.log("trigger2Y：　" + trigger2Y);
  console.log("trigger3Y：　" + trigger3Y);
  console.log("trigger4Y：　" + trigger4Y);
  console.log("----------------");


  // 白背景の時はbodyの.bg-is-blackを削除
  // 黒背景の時はbodyに.bt-is-blackを付与
  if( trigger1Y * -1 > 0 && trigger2Y * -1 < 0 || trigger3Y * -1 > 0 && trigger4Y * -1 < 0 ) {
  	body.classList.add('bg-is-black');
  } else if( trigger2Y * -1 > 0 || trigger4Y * -1 > 0 ) {
  	body.classList.remove('bg-is-black');
  }else {
  	body.classList.remove('bg-is-black');
  }
}

window.addEventListener('scroll', changeColor);