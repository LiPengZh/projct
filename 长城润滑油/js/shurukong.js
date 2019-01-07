$(function(){
        $(".my_input").focus(function(){
            if($(this).val()==this.defaultValue){
                $(this).val('').css("color","#000");
            }
        }).blur(function(){
             if($(this).val() ==''){
                 $(this).val(this.defaultValue);
             }
        })
        // $(".my_input").blur(function(){
        //     if($(this).val ==''){
        //         $(this).var(this.defaultValue)
        //     }
        // })
    })
