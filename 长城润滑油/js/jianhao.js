$(function(){
    $(".jianhao").click(function(){
        var num=$(this).siblings(".zhi").val();
        if(num>1){
            num--;
        $(this).siblings(".zhi").val(num);
        }
        if(num<2){
            $(this).prop('disabled',true)
        }
    })
})