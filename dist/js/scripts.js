"use strict";

(function () {
    var inputgroup = $('#nombre').width(),
        fnombrelabel = $("#nombre > label"),
        fnombreinput = $("#nombre > input");
    var ftelefonolabel = $("#telefono > label"),
        ftelefonoinput = $("#telefono > input");
    var fcorreolabel = $("#correo > label"),
        fcorreoinput = $("#correo > input");
    var fmensajelabel = $("#mensaje > label"),
        fmensajetextarea = $("#mensaje > textarea"),
        span = 25;
    fnombreinput.css({ 'width': inputgroup - fnombrelabel.width() - span + 'px' });
    ftelefonoinput.css({ 'width': inputgroup - ftelefonolabel.width() - span + 'px' });
    fcorreoinput.css({ 'width': inputgroup - fcorreolabel.width() - span + 'px' });
    fmensajetextarea.css({ 'width': inputgroup - fmensajelabel.width() - span + 'px' });
})();
(function () {
    var formulario = $('#formulario');
    formulario.on('submit', function (e) {
        e.preventDefault();
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsiaW5wdXRncm91cCIsIiQiLCJ3aWR0aCIsImZub21icmVsYWJlbCIsImZub21icmVpbnB1dCIsImZ0ZWxlZm9ub2xhYmVsIiwiZnRlbGVmb25vaW5wdXQiLCJmY29ycmVvbGFiZWwiLCJmY29ycmVvaW5wdXQiLCJmbWVuc2FqZWxhYmVsIiwiZm1lbnNhamV0ZXh0YXJlYSIsInNwYW4iLCJjc3MiLCJmb3JtdWxhcmlvIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxZQUFZO0FBQ1QsUUFBSUEsYUFBWUMsRUFBRSxTQUFGLEVBQWFDLEtBQWIsRUFBaEI7QUFBQSxRQUNJQyxlQUFlRixFQUFFLGlCQUFGLENBRG5CO0FBQUEsUUFFSUcsZUFBZUgsRUFBRSxpQkFBRixDQUZuQjtBQUdBLFFBQUlJLGlCQUFpQkosRUFBRSxtQkFBRixDQUFyQjtBQUFBLFFBQ0lLLGlCQUFpQkwsRUFBRSxtQkFBRixDQURyQjtBQUVBLFFBQUlNLGVBQWVOLEVBQUUsaUJBQUYsQ0FBbkI7QUFBQSxRQUNJTyxlQUFlUCxFQUFFLGlCQUFGLENBRG5CO0FBRUEsUUFBSVEsZ0JBQWdCUixFQUFFLGtCQUFGLENBQXBCO0FBQUEsUUFDSVMsbUJBQW1CVCxFQUFFLHFCQUFGLENBRHZCO0FBQUEsUUFFSVUsT0FBTyxFQUZYO0FBR0FQLGlCQUFhUSxHQUFiLENBQWlCLEVBQUMsU0FBU1osYUFBV0csYUFBYUQsS0FBYixFQUFYLEdBQWdDUyxJQUFqQyxHQUF1QyxJQUFoRCxFQUFqQjtBQUNBTCxtQkFBZU0sR0FBZixDQUFtQixFQUFDLFNBQVNaLGFBQVdLLGVBQWVILEtBQWYsRUFBWCxHQUFrQ1MsSUFBbkMsR0FBeUMsSUFBbEQsRUFBbkI7QUFDQUgsaUJBQWFJLEdBQWIsQ0FBaUIsRUFBQyxTQUFTWixhQUFXTyxhQUFhTCxLQUFiLEVBQVgsR0FBZ0NTLElBQWpDLEdBQXVDLElBQWhELEVBQWpCO0FBQ0FELHFCQUFpQkUsR0FBakIsQ0FBcUIsRUFBQyxTQUFTWixhQUFXUyxjQUFjUCxLQUFkLEVBQVgsR0FBaUNTLElBQWxDLEdBQXdDLElBQWpELEVBQXJCO0FBQ0gsQ0FmRDtBQWdCQSxDQUFDLFlBQVk7QUFDVixRQUFJRSxhQUFZWixFQUFFLGFBQUYsQ0FBaEI7QUFDQ1ksZUFBV0MsRUFBWCxDQUFjLFFBQWQsRUFBdUIsVUFBQ0MsQ0FBRCxFQUFLO0FBQ3hCQSxVQUFFQyxjQUFGO0FBQ0gsS0FGRDtBQUdILENBTEQiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaW5wdXRncm91cD0gJCgnI25vbWJyZScpLndpZHRoKCksXHJcbiAgICAgICAgZm5vbWJyZWxhYmVsID0gJChcIiNub21icmUgPiBsYWJlbFwiKSxcclxuICAgICAgICBmbm9tYnJlaW5wdXQgPSAkKFwiI25vbWJyZSA+IGlucHV0XCIpO1xyXG4gICAgbGV0IGZ0ZWxlZm9ub2xhYmVsID0gJChcIiN0ZWxlZm9ubyA+IGxhYmVsXCIpLFxyXG4gICAgICAgIGZ0ZWxlZm9ub2lucHV0ID0gJChcIiN0ZWxlZm9ubyA+IGlucHV0XCIpO1xyXG4gICAgbGV0IGZjb3JyZW9sYWJlbCA9ICQoXCIjY29ycmVvID4gbGFiZWxcIiksXHJcbiAgICAgICAgZmNvcnJlb2lucHV0ID0gJChcIiNjb3JyZW8gPiBpbnB1dFwiKTtcclxuICAgIGxldCBmbWVuc2FqZWxhYmVsID0gJChcIiNtZW5zYWplID4gbGFiZWxcIiksXHJcbiAgICAgICAgZm1lbnNhamV0ZXh0YXJlYSA9ICQoXCIjbWVuc2FqZSA+IHRleHRhcmVhXCIpLFxyXG4gICAgICAgIHNwYW4gPSAyNTtcclxuICAgIGZub21icmVpbnB1dC5jc3Moeyd3aWR0aCc6KGlucHV0Z3JvdXAtZm5vbWJyZWxhYmVsLndpZHRoKCktc3BhbikrJ3B4J30pO1xyXG4gICAgZnRlbGVmb25vaW5wdXQuY3NzKHsnd2lkdGgnOihpbnB1dGdyb3VwLWZ0ZWxlZm9ub2xhYmVsLndpZHRoKCktc3BhbikrJ3B4J30pO1xyXG4gICAgZmNvcnJlb2lucHV0LmNzcyh7J3dpZHRoJzooaW5wdXRncm91cC1mY29ycmVvbGFiZWwud2lkdGgoKS1zcGFuKSsncHgnfSk7XHJcbiAgICBmbWVuc2FqZXRleHRhcmVhLmNzcyh7J3dpZHRoJzooaW5wdXRncm91cC1mbWVuc2FqZWxhYmVsLndpZHRoKCktc3BhbikrJ3B4J30pO1xyXG59KSgpO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICBsZXQgZm9ybXVsYXJpbyA9JCgnI2Zvcm11bGFyaW8nKTtcclxuICAgIGZvcm11bGFyaW8ub24oJ3N1Ym1pdCcsKGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
