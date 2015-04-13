$(document).ready(function(){


  function loadImage() {
    var preload = new createjs.LoadQueue();
    preload.addEventListener("fileload", handleFileComplete);
    preload.loadFile("image/slide01 .jpg");
    console.log('erick')
  }

  function handleFileComplete(event) {
    document.body.appendChild(event.result);
  }


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

  function campoObrigatorio(campo) {
    if (campo.value.length < 1 || campo.value.defaultValue) {

      return false;
      $(".name").css('border-color','#000');
    } else {
      return true;
    }
  }
  function campoEmail(campo) {
    if (campo.value.indexOf("@") == -1 || campo.value.indexOf(".") == -1) {
      return false;
    } else {
      return true;
    }
  }

  window.onload = function() {
    function validarFormulario(formulario) {
      for (var i=0; i<qdeCampos; i++) {
        var controle = formulario.elements[i];
        if (controle.className.indexOf("obrigatorio") != -1) {
          if (!campoObrigatorio(controle)) {
            alert("Por favor preencha o campo " + controle.name + ".");
            return false;

          }
        }
        if (controle.className.indexOf("email") != -1) {
          if(!campoEmail(controle)) {
            alert("Por favor forneça um endereço de email válido.");
            return false;

          }
        }
      }
    }
    var formulario = document.getElementById("form");
    var qdeCampos = formulario.elements.length;
    formulario.onsubmit = function() {
      return validarFormulario(this);
    }
  }

});

window.addEventListener('resize', function(){
  var height = $('.slide img').height();
  $('.slide').height(height);   
});


