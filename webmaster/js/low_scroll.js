$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(function() {
    $( "#slider-range-max" ).slider({
      min: 0,
      max: 3,
      value:2,    
    });
  });


 /*
            Функция injectSelect принимает объект select и ассоциативный массив.
            Select очищается, затем в него добавляются элементы option,
            значение которых устанавливают ключи массива, а текст — значения массива.
            Ничего не возвращает.
        */
        function injectSelect (sel, rowsObject) {
            var opt, x;
            sel.innerHTML = "";
            for (x in rowsObject) {
                opt = document.createElement("option");
                opt.value = x;
                opt.innerHTML = rowsObject[x];
                sel.appendChild(opt);
            }
        }
        /*
            Функция makeNumbersObject принимает два числа. Возвращает ассоциативный массив
            ряда чисел от меньшего к большему, включительно. 
        */
        function makeNumbersObject (from, to) {
            var result = {}, x;
            if(from > to) { // Если from меньше to, поменять их значения друг на друга.
                var z = from;
                from = to;
                to = z;
            }
            for (x = from; x <= to; x++) {
                result[x] = x;
            }
            return result
        }
        injectSelect(document.getElementById("months"), {
            jan:"Январь", feb:"Февраль", mar:"Март", apr:"Апрель", 
            may:"Май", jun:"Июнь", jul:"Июль", avg:"Август", 
            sep:"Сентябрь", okt:"Октябрь", nov:"Ноябрь", dec:"Декабрь"
        }); // Наполняем месяца
        injectSelect(document.getElementById("years"), makeNumbersObject(1920, 2012)); // Наполняем года
        injectSelect(document.getElementById("days"), makeNumbersObject(1, 31));// Наполняем дни
  
