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