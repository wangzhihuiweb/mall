$(function(){
	var deleteLsit = document.querySelectorAll(".deleteicon");
			for(var i = 0; i < deleteLsit.length; i++) {
				deleteLsit[i].addEventListener('tap', function() {
					var that=$(this);
					var btnArray = ['否', '是'];
					mui.confirm('确定删除订单', ' ', btnArray, function(e) {
						if(e.index == 1) {
							mui.toast('删除成功');
							that.parent().parent().remove()
						} else {
							mui.toast('删除失败');
						}
					})
				})
			}
			
	var deleteLsit = document.querySelectorAll(".compile");
			for(var i = 0; i < deleteLsit.length; i++) {
				deleteLsit[i].addEventListener('tap', function() {
					window.location="addressManage.html"
				})
			}		
})


function defaultFun(obj){
//	$(".default b").removeClass("light")
	if(!$(obj).hasClass("light")){
			$(obj).addClass("light").parent().parent().siblings().find(".default b").removeClass("light")
	}else{
			$(obj).removeClass("light")
		}
}


