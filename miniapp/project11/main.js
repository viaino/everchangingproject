// 親要素をidで取得
var target01 = document.getElementById('parentNode');

// liっていうタグを全部自動で集めるよ
var target02 = target01.getElementsByTagName('li'); 

// 集めたliタグに対して一括で処理するよ
for (let i = 0; i < target02.length; i++) {
    var target03 = target02[i];
    console.log(target03);

    // settAttributeでonclick要素を追加するよ、引数はhello()関数ね
    target03.setAttribute("onclick", "hello(this)");
}

// ハロー関数を設定しておくよ
function hello(item) {
  alert(item.textContent + "だよ");
}