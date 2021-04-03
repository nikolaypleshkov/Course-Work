$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll >550){
            $(".content").css("z-index","-1");
          }
          else{
            $(".content").css("z-index","0");
          }
    })
})
