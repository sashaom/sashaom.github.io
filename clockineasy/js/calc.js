$(function() {
  $('.pperiod').click(function(e){
    e.preventDefault();
    if($(this).hasClass('active')){
      return;
    }
    $('.pperiod').removeClass('active');
    $(this).addClass('active');
  })

  $('.calculate-block input[type=number]').change(function(e){
    if(this.value <= 0){
      $(this).addClass('error');
      e.preventDefault();
      this.value = 0;
      return;
    } else {
      $(this).removeClass('error');
    }

    var hasError = false,
        employees = $('#employees')[0].value;
    if(employees == '' || employees <= 0 || employees % 1 != 0){
      hasError = true;
    }

    var ahr = $('#ahr')[0].value;
    if(ahr == '' || ahr <= 0){
      hasError = true;
    }

    var hours = $('#hours')[0].value;
    if(hours == '' || hours <= 0){
      hasError = true;
    }

    if(hasError){
      return;
    }

    var payPeriod = $('.pperiod.active').eq(0).data().period == 'weekly' ? 52 : 26;

    $('#result').html((employees * ahr * hours * payPeriod * 0.022).toFixed(2));

    $('#price').html((employees * 4).toFixed(2));

  })

});