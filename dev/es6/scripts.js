(function () {
    let inputgroup= $('#nombre').width(),
        fnombrelabel = $("#nombre > label"),
        fnombreinput = $("#nombre > input");
    let ftelefonolabel = $("#telefono > label"),
        ftelefonoinput = $("#telefono > input");
    let fcorreolabel = $("#correo > label"),
        fcorreoinput = $("#correo > input");
    let fmensajelabel = $("#mensaje > label"),
        fmensajetextarea = $("#mensaje > textarea"),
        span = 25;
    fnombreinput.css({'width':(inputgroup-fnombrelabel.width()-span)+'px'});
    ftelefonoinput.css({'width':(inputgroup-ftelefonolabel.width()-span)+'px'});
    fcorreoinput.css({'width':(inputgroup-fcorreolabel.width()-span)+'px'});
    fmensajetextarea.css({'width':(inputgroup-fmensajelabel.width()-span)+'px'});
})();
(function () {
   let formulario =$('#formulario');
    formulario.on('submit',(e)=>{
        e.preventDefault();
    });
})();
(function () {
    let menuid = $('.menuid');
    menuid.on('click','a',function (e) {
        e.preventDefault();
        let link = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 2000);
    });
})();
(function(){
  let topBar = $('#top-bar'),
      alto=$(window).height();

    $(window).scroll( function(){
      let top=$(this).scrollTop();
      // console.log(top+' / '+alto);
      if (top >= alto ){
        topBar.slideDown();

      }else{
        topBar.slideUp();
      }
  })
})();
