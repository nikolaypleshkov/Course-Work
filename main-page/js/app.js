const items = document.getElementById("content-id");
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll >600 || scroll > 1350 ){
            $(".content").css("z-index","-1");
           
          }
          else{
            $(".content").css("z-index","0");
           
          }
    })
})

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 1000){
      $(items).css("z-index","-1");
    }
    else{
      $(items).css("z-index","-0");
    }
  })
})




