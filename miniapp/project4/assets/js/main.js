// 入力した値をjsonファイル形式でダウンロード

window.onload = () => {
  var download = document.getElementById('download');
  var name = document.getElementById('name');
  var url = document.getElementById('url');

  var getData = () =>{
    return {
      name: name.value,
      url: url.value
    };
  };
  
  function func() {
    var data = getData();
    var blob = new Blob([JSON.stringify(data, null, '  ')],
      {type: 'application\/json'});
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'sample.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  download.addEventListener('click', func, false);
};