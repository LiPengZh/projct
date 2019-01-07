$(function(){
    $("table .td12 a").click(function(){
         $(this).parent().parent().detach();
     
    })
})


$(function(){
    $(".ospan01 a").click(function(){
        $("table").detach();
    })
})