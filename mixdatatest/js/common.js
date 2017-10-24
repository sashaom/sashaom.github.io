function allBig () {
	var text = document.getElementById('words-field').value;
	$("#words-field").load("textarea#textareaid").val(text.toUpperCase());
}	

function allsmall () {
	var text = document.getElementById('words-field').value;
	$("#words-field").load("textarea").val(text.toLowerCase());
}	

$("button.second").on("click", function(){
	var names = document.getElementById('words-field').value;
	var arr = names.split(' ')
	.map(function(el) {
		return el.charAt(0).toUpperCase() + el.slice(1);
	})
	.join('\n');
	$("#words-field").load("textarea#words-field").val(arr);
});

function firstBig() {
	var text = document.getElementById('words-field').value;
	$("#words-field").load("textarea#words-field").val(text[0].toUpperCase() + text.slice(1));
}

// ДОБАВИТЬ ПЛЮСЫ 
function addPlus() {
	var text = document.getElementById('words-field').value;
	var VResult = text.replace(/[_ \n\t]+/g, ' +');
	$("#words-field").load("textarea#words-field").val(VResult);
}
//УДАЛИТЬ ПЛЮСЫ
function deletePlus() {
	var text = document.getElementById('words-field').value;
	var VResult = text.replace(/[_+\t]+/g, ' ');
	$("#words-field").load("textarea#words-field").val(VResult);
}

// скопировать в буфер
var cutTextareaBtn = document.querySelector('.copy');
cutTextareaBtn.addEventListener('click', function(event) {  
	var cutTextarea = document.querySelector('#words-field');  
	cutTextarea.select();
	try {  
		var successful = document.execCommand('cut');  
		var msg = successful ? 'successful' : 'unsuccessful';  
		console.log('Cutting text command was ' + msg);  
	} catch(err) {  
		console.log('Oops, unable to cut');  
	}  
});

//удалить пробелы вначале и в конце
function deleteSpace() {
	var text = document.getElementById('words-field').value;
	var VResult = text.trim();
	$("#words-field").load("textarea#words-field").val(VResult);
}

//удалить табуляцию
function deleteTab() {
	var text = document.getElementById('words-field').value;
	var VResult = text.trim();
	$("#words-field").load("textarea#words-field").val(VResult);
}

function changeSpace() {
	var text = document.getElementById('words-field').value;
	var VResult = text.replace(/[_ \t]+/g, '_');
	$("#words-field").load("textarea#words-field").val(VResult);
}

function deleteSpecialSymbols() {
	var text = document.getElementById('words-field').value;
	var VResult = text.replace(/[\(\)\`\~\!\@\#\$\%\^\&\*\_\=\+\[\]\\\{\}\|\;\'\:\"\,\/\<\>\?]+/g, '');
	$("#words-field").load("textarea#words-field").val(VResult);
}

function SpaceSpecialSymbols() {
	var text = document.getElementById('words-field').value;
	var VResult = text.replace(/[\(\)\`\~\!\@\#\$\%\^\&\*\_\=\+\[\]\\\{\}\|\;\'\:\"\,\/\<\>\?]+/g, ' ');
	$("#words-field").load("textarea#words-field").val(VResult);
}

function deleteDuplicat() {
	var text = document.getElementById('words-field').value;
	var arr = text.split('\n');
	var result = [];
	nextInput:
	for (var i = 0; i < arr.length; i++) {
      var str = arr[i]; // для каждого элемента
      for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
        if (result[j] == str) continue nextInput; // если да, то следующий
    }
    result.push(str);
}
$("#words-field").load("textarea#words-field").val(str);
}

function addFigur() {
	var text = document.getElementById('words-field').value;
	var res = text.replace(/^(.*?)$/gm,'[$&]');
	$("#words-field").load("textarea#words-field").val(res);
}

function deleteSpeceAndDefisSymbols() {
	var text = document.getElementById('words-field').value;
	var VResult = text.replace(/\s\-/gm, '$`');
	$("#words-field").load("textarea#words-field").val(VResult);
}

function addStartDefis() {
	var text = document.getElementById('words-field').value;
	var res = text.replace(/^(.*?)$/gm,'-$&');
	$("#words-field").load("textarea#words-field").val(res);
}
function addDots() {
	var text = document.getElementById('words-field').value;
	var res = text.replace(/^(.*?)$/gm,'\"$&\"');
	$("#words-field").load("textarea#words-field").val(res);
}
function addDefisAndFigur() {
	var text = document.getElementById('words-field').value;
	var res = text.replace(/^(.*?)$/gm,'-[$&]');
	$("#words-field").load("textarea#words-field").val(res);
}
function addDefisAndDots() {
	var text = document.getElementById('words-field').value;
	var res = text.replace(/^(.*?)$/gm,'-"$&"');
	$("#words-field").load("textarea#words-field").val(res);
}

// function findEdit {
// 	var find = document.getElementById('find').value;
// 	var put = document.getElementById('edit').value;
// }

//сортирвка 
function sortAlphabet() {
	var names = document.getElementById('words-field').value;
	var arr = names.split('\n');
	$("#words-field").load("textarea#words-field").val(arr.sort().join('\n'));

}
function reveAlphabet() {
	var names = document.getElementById('words-field').value;
	var arr = names.split('\n');
	var revarr = arr.sort();
	$("#words-field").load("textarea#words-field").val(revarr.reverse().join('\n'));
}