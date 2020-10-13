// クラスの出席管理
// 生徒の座席をタッチすると自動で出席数や出席率が表示される

// 要素の取得と代入
var members = document.getElementById('Members').children;
var student = document.getElementById('student').children[0];
var percent = document.getElementById('percent').children[0];
var attendnum = document.getElementById('attendnum').children[0];
var attend = [];
var attendno = 0;

// 生徒数を計算
var total = 0;
for (var i = 0; i < members.length; i++) {
	total ++;
}
student.textContent = total;

// クリックイベント
attended = function(item) {
	// 要素の２つ下の要素の中のテキストを取得
	var con = item.children[0].children[0].textContent;
	// 配列の中にテキストがあるか検索
	var result = attend.indexOf(con);

	// 要素の有無で条件分岐
	if (result == -1) { 
		// 配列に追加
		attend.push(con);
		item.children[0].classList.add("active");
		// 出席数を１追加
		attendno = attendno +  1;
	} else {
		// 配列から削除
		delete attend[result];
		item.children[0].classList.remove("active");
		// 出席数を１マイナス
		attendno = attendno -  1;
	}
	// 出席率と出席数を書き換える
	percent.textContent = Math.round(attendno / total * 100) + "%";
	attendnum.textContent = attendno + "人";
}