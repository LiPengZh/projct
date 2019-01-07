$(function(){
    $(".my_ul01 li").click(function(){
        // alert(1);
        // var _index=$(this).index();
        $(this).addClass("my_li01").siblings().removeClass("my_li01");
       $(".you01_1").hide().eq($(this).index()).show();

    
    })
})