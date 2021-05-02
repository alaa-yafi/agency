// لتغير خصائص القائمة عند النزول إلى الأسفل noTransparrent إضافة الخاصية 
$(window).scroll(function(){ /*عند تحريك*/
   if($(this).scrollTop()>=500){
      $("#navbar").addClass("noTransparrent");
    }else{
      $("#navbar").removeClass("noTransparrent");
    }
});
// تحرك الصفحة بين عناصر القائمة ضمن فترة زمنية محددة
$(document).ready(function(){
   $("a.scroll").on('click', function(event) {

        var hash = this.hash;

        $('html, body').animate({scrollTop: $(hash).offset().top - 100}, 800, function(){});
    
    });
});
// countTo تطبيق التابع
$('.timer').countTo();
// التحقق من إدخال البيانات الصحيحة في نموذج الإرسال
$(document).ready(function() {
  $(function () {
      $("#commentForm").validate();
  });
});