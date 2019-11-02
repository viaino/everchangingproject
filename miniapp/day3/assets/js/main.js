var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');

var gri = document.getElementById('gri');
var hah = document.getElementById('hah');
var rei = document.getElementById('rei');
var sul = document.getElementById('sul');

var body = document.getElementById('body');

function func1( item ) {
	q1.classList.add('d-none');
	if ( item.textContent == "天使" ) {
		q2.classList.add('d-block');
	} else {
		q3.classList.add('d-block');
	}
}

function func2( item ) {
	q2.classList.remove('d-block');
	if ( item.textContent == "正義" ) {
		body.classList.add('bk-gri');
		gri.classList.add('d-block');
	} else {
		body.classList.add('bk-hah');
		hah.classList.add('d-block');
	}
}

function func3( item ) {
	q3.classList.remove('d-block');
	if ( item.textContent == "権力" ) {
		body.classList.add('bk-sul');
		sul.classList.add('d-block');
	} else {
		body.classList.add('bk-rei');
		rei.classList.add('d-block');
	}
}
