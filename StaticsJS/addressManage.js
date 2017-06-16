$(function() {
	$("#default").on('tap', 'b', function() {
		if(!$(this).hasClass("light")){
			$(this).addClass("light")
		}else{
			$(this).removeClass("light")
		}
	})
})