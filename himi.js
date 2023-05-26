document.addEventListener("DOMContentLoaded", function() {
// テキストエリアの要素を取得します
var inputArea = document.getElementById("inputArea");
// エラーチェック
if (inputArea) {
	inputArea.addEventListener("input", function() {
		var inputText = inputArea.value;
		for (var i = 0; i < 99; i++) {
			var clcell = document.getElementById(i+1);
			clcell.textContent = "";
		}
		for (var i = 0; i < inputText.length; i++) {
			var cell = document.getElementById(i+1);
			cell.textContent = inputText[i];
		}
	});
  }

var inputIds = ["start1","goal1","inputArea"];

inputIds.forEach(function(id) {
	var colinput = document.getElementById(id);
	colinput.addEventListener("input", function() {
			//まず全部移す
		for (var i = 1; i < 100; i++) {
		var newcell = document.getElementById("s"+i);
		var oldcell = document.getElementById(i);
		newcell.textContent = oldcell.textContent;
			//背景色けす
		newcell.style.backgroundColor = "";
		oldcell.style.backgroundColor = "";
		}	
		
			//背景色つけた
		var start1Text = parseInt(start1.value);
		var goal1Text = parseInt(goal1.value);
		if (!isNaN(start1Text) && !isNaN(goal1Text) && start1Text<goal1Text){
			for (var i = start1Text; i < goal1Text+1; i++) {
				var cloldcell = document.getElementById(i);
				cloldcell.style.backgroundColor = "yellow";

				var str = cloldcell.textContent
				var code = str.charCodeAt(0);
				code=code+29
				var text = String.fromCodePoint(code);
				
				var clnewcell = document.getElementById("s"+i);
				clnewcell.textContent =text
				clnewcell.style.backgroundColor = "yellow";
			}
			
			outputArea.innerText=""			
			for (var i = 1; i < 100; i++) {
				if(i == start1Text){
				outputArea.innerText = outputArea.innerText+"《";
				}

				var clnewcell = document.getElementById("s"+i);
				text=clnewcell.innerText
				outputArea.innerText = outputArea.innerText+text;
				if(i == goal1Text){
				outputArea.innerText = outputArea.innerText+"》";
				}
			}
			outputArea.innerText=outputArea.innerText+"\n\nひみったー(https://murohiromu.github.io/himi.html)で暗号化済。"
			
			
		}

		
		
	})
})

});

function twit(){
var tweetText = outputArea.innerText;
var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText);
// ツイートリンクを開く
window.open(tweetUrl, "_blank");
}

