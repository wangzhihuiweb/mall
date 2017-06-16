$(function() {
	//加
	$(".add").on("click", function() {
		var text = $(this).parent().find("em").text();
		text++;
		$(this).parent().find("em").text(text);
		//                  var id = $(this).parent().parent().find("em").val();
		//                  //alert(id);
		//                  UpdateItemNumber(this, id, text);
	})

	//减
	$(".minus").on("click", function() {
		var text = $(this).parent().find("em").text();
		$(this).each(function() {
			if(text > 1) {
				text--;
			}
			$(this).parent().find("em").text(text);

		})
		//                  var id = $(this).parent().parent().find("input").val();
		//                  UpdateItemNumber(this, id, text);
	})
	var choice = document.querySelectorAll(".orderCon > b");
	for(var i = 0; i < choice.length; i++) {
//		alert(0)
		choice[i].addEventListener('click', function() {
//			alert(0)
			if(!$(this).hasClass("light")) {
				$(this).addClass("light")
			} else {
				$(this).removeClass("light")
			}
		})
	}
	
	document.querySelectorAll(".completed")[0].addEventListener("click",function(){
		window.location="personal.html"
	})
})