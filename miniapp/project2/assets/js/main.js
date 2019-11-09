// ローカルストレージに連想配列で”言語”と”テーマカラー”を設定し、ページを更新しても値を保存

// ローカルストレージをリセット
// localStorage.clear();

// DOMの取得
var wrpLan = document.getElementById('wrp-language');
var wrpCol = document.getElementById('wrp-color');
var slclan = document.getElementById('slclan');
var slccol = document.getElementById('slccol');
var outlan = JSON.parse(localStorage.getItem("languages"));
var outcol = JSON.parse(localStorage.getItem("colors"));
var body = document.getElementById('body');

// bodyのカラーを設定
body.classList.add(`bk-${outcol}`);

slclan.textContent = outlan;
slccol.textContent = outcol;



// ローカルストレージへ連想配列で２つのオブジェクトを保存する
// 言語のテキストをローカル保存
var items = {}
function clickLa(txt) {
	items.lan = txt.textContent;
	console.log("保存する連想配列は " + items.lan);
	localStorage.setItem("languages", JSON.stringify(items.lan));
	var output2 = JSON.parse(localStorage.getItem("languages"));
	console.log(output2);
	slclan.textContent = items.lan;
	wrpLan.classList.add("d-none");
}


// テーマカラーをローカル保存
function clickCo(txt) {
	items.col = txt.textContent;
	console.log("保存する連想配列は " + items.col);
	localStorage.setItem("colors", JSON.stringify(items.col));
	slccol.textContent = items.col;
	body.classList.add(`bk-${items.col}`);
	wrpCol.classList.add("d-none");
}