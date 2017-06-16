var ProID = getParamValue("ProID");
var ProductName = getParamValue("ProductName");

$(function(){
	$.ajax({
//		url: "../json/productlist.json",
		type: "GET",
		url:"https://wangzhihuiweb.github.io/mall/json/productlist.json",
		async: true,
		dataType: "json",
		success: function(data) {
			console.log(data)
			$.each(data.Data.List, function(index, val) {
				if(val.ProductName==ProductName){
					$(".mui-slider").attr("id",val.className)
					boxFun("hezhuang",val.classify[0])
					boxFun("xiangzhuang",val.classify[1])
//					boxedFun(val.classify[1])
				}
//					console.log(val.classify[1])
			});
			var mySwiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
//					autoplay: 3000,
					loop: true,
					//pagination : '#swiper-pagination1',
				})
			
		},error:function(){
			alert("失败")
		}
	});
	
});


function boxFun(id,data){
	var str="";
	var Other="";
	$("#"+id+"spec").html("<dl><dt>"+data.name+"</dt><dd>"+data.spec+"</dd></dl><p>&yen;<i>"+data.price+"</i>.00／"+data.unit+"</p>");
	$("#"+id+"DetailsPic").html("<img src='../images/"+data.DetailsImg+"' alt='' />")
	$.each(data.Product, function(i,v) {
		str+="<div class='swiper-slide'><a href='javascript:'><img src='../images/"+v.Img+"' /></a></div>";
	});	
	$.each(data.Other,function(i,v){
	if(i%2==0){
//		alert(i)
		Other+="<div><a href='productDetails.html?ProID="+v.ProID+"&&ProductName="+v.ProductName+"'><img src='../images/"+v.Img+"' alt='' /><b class='"+v.Class+"'>"+v.name+"</b></a>";
	}else{
		Other+="<a href='productDetails.html?ProID="+v.ProID+"&&ProductName="+v.ProductName+"'><img src='../images/"+v.Img+"' alt='' /><b class='"+v.Class+"'>"+v.name+"</b></a></div>";
		
	}
});
	$("#"+id+"Other").html(Other);
	$("#"+id+"Banner").html(str);
}
