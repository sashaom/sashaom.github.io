$(function() {
  $('.pperiod').click(function(e){
    e.preventDefault();
    if($(this).hasClass('active')){
      return;
    }
    $('.pperiod').removeClass('active');
    $(this).addClass('active');
  })

  $('.calc .calculate').click(function(e){
    e.preventDefault();
    $('#employees, #ahr, #hours').removeClass('error');

    var hasError = false,
        employees = $('#employees')[0].value;
    if(employees == '' || employees <= 0 || employees % 1 != 0){
      hasError = true;
      $('#employees').addClass('error');
    }

    var ahr = $('#ahr')[0].value;
    if(ahr == '' || ahr <= 0){
      hasError = true;
      $('#ahr').addClass('error');
    }

    var hours = $('#hours')[0].value;
    if(hours == '' || hours <= 0){
      hasError = true;
      $('#hours').addClass('error');
    }

    if(hasError){
      return;
    }

    var payPeriod = $('.pperiod.active').eq(0).data().period == 'weekly' ? 52 : 26;

    $('#result').html((employees * ahr * hours * payPeriod * 0.022).toFixed(2));

    $('#price').html((employees * 4).toFixed(2));
  })
});