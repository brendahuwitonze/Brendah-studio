$('document').ready(function(){


$("#submit").click(function () {
     var pilot = $("#name").val();
     var basket = $("#email").val();
     var comment = $("#infor").val();
 
     if (pilot == '' || basket == '' || comment == '') {
 
         alert("Inavlid information")
     } else {
 
         alert(pilot + " your meassage received. you are most welcome Thank you for contacting us.");
     }
 })
 
});





$(document).ready(function () {
     $('.imag-desript').click(function () {
          $('.des-descript').show();
          $('.imag-desript').hide();
     });
     $('.des-descript').click(function () {
          $('.imag-desript').show();
          $('.des-descript').hide();
     });
});
$(document).ready(function () {
     $('.description').click(function () {
          $('.descript').show()
          $('.description').hide()

     })
     $('.descript').click(function () {
          $('.description').show()
          $('.descript').hide()
     });
});
$(document).ready(function () {
     $('.des').click(function () {
          $('.text-des').show()
          $('.des').hide()

     })
     $('.text-des').click(function () {
          $('.des').show()
          $('.text-des').hide()
     });
});
$(document).ready(function () {
     $('.image-over').mouseover(function () {
          $('.ict').show();
          $('.life').show();
     })

     $('.image-over').mouseout(function () {
          $('.ict').hide();
          $('.life').hide();
     })
});
$(document).ready(function () {
     $('.over-image').mouseover(function () {
          $('.comp').show();
          $('.christ').show();
     })

     $('.over-image').mouseout(function () {
          $('.comp').hide();
          $('.christ').hide();
     })
});

$(document).ready(function () {
     $('.overlay').mouseover(function () {
          $('.home').show();
          $('.people').show();
     })

     $('.overlay').mouseout(function () {
          $('.home').hide();
          $('.people').hide();
     })
});

$(document).ready(function () {
     $('.sco').mouseover(function () {
          $('.today').show();
          $('.prove').show();
     })

     $('.sco').mouseout(function () {
          $('.today').hide();
          $('.prove').hide();
     })
});

$(document).ready(function () {
     $('.dore').mouseover(function () {
          $('.epi').show();
          $('.lil').show();
     })

     $('.dore').mouseout(function () {
          $('.epi').hide();
          $('.lil').hide();
     })
});

$(document).ready(function () {
     $('.josh').mouseover(function () {
          $('.mug').show();
          $('.kim').show();
     })

     $('.josh').mouseout(function () {
          $('.mug').hide();
          $('.kim').hide();
     })
});

$(document).ready(function () {
     $('.sharo').mouseover(function () {
          $('.rec').show();
          $('.bord').show();
     })

     $('.sharo').mouseout(function () {
          $('.rec').hide();
          $('.bord').hide();
     })
});
$(document).ready(function () {
     $('.bra').mouseover(function () {
          $('.kay').show();
          $('.border').show();
     })

     $('.bra').mouseout(function () {
          $('.kay').hide();
          $('.border').hide();
     })
});





