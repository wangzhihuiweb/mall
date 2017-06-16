function editFun(obj){
	$(obj).attr("onclick","finishFun(this)").html("完成")
	$(obj).parent().next(".orderCon").find(".orderName").css("display","none")
	$(obj).parent().next(".orderCon").find(".orderEdit").css("display","block")
}

function finishFun(obj){
	$(obj).attr("onclick","editFun(this)").html("编辑")
	$(obj).parent().next(".orderCon").find(".orderEdit").css("display","none")
	$(obj).parent().next(".orderCon").find(".orderName").css("display","block")
}

$(function(){
	 //加
    $(".add").on("click", function () {
        var text = $(this).parent().find("input").val();
        text++;
        $(this).parent().find("input").val(text);
//      var id = $(this).parent().parent().find("input").val();
        //alert(id);
//      UpdateItemNumber(this, id, text);
    })

    //减
    $(".minus").on("click", function () {
        var text = $(this).parent().find("input").val();
        $(this).each(function () {
            if (text > 1) {
                text--;
            }
            $(this).parent().find("input").val(text);

        })
//      var id = $(this).parent().parent().find("input").val();
//      UpdateItemNumber(this, id, text);
    })
	
})
