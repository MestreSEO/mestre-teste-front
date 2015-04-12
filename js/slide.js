$(document).ready(function(){

  var height = $('.slide img').height();
  $('.slide').height(height);  

  $('.slide img:eq(0)').addClass("ativo").show()
  var texto = $(".ativo").attr("alt");
  $('.slide').prepend("<p>"+texto+"</p>");
  setInterval(slide,3000);

  function slide(){

    if($('.ativo').next().size()){

      $('.ativo').fadeOut().removeClass('ativo').next().fadeIn().addClass('ativo');

    }else{

      $('.ativo').fadeOut().removeClass("ativo");
      $('.slide img:eq(0)').fadeIn().addClass("ativo");
    }

    var texto = $('.ativo').attr('alt');

    $('.slide p').hide().html(texto).delay(500).fadeIn();


  }

});

window.addEventListener('resize', function(){
  var height = $('.slide img').height();
  $('.slide').height(height);   
});

function doSomething() {
  var height = $('.slide img').height();
  $('.slide').height(height); 
};

var resizeTimer;
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(doSomething, 100);
});