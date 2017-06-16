window.onload=function(){
	
	var whole="<div><div class='orderNumber'><span>订单编号：D0000000001</span><b>待付款</b></div><div class='orderCon'><b class='light'></b><div class='orderImg'><img src='../images/pic.png' alt='' /></div><div class='orderName'><h3>迎面养生&nbsp;&bull;&nbsp;番茄赢面</h3><h4>盒装/5包</h4><p><span><em>&yen;</em>100</span><b>×1</b></p></div></div><div class='goDetails'><a href='javascript:'>查看详情</a></div><div class='orderTotal'><b>&yen;700</b><p>合计:</p><span>共计1件商品</span></div><div class='orderState'><a href='javascript:'>确认付款</a><a href='javascript:'>取消订单</a></div></div>";
//	$("#whole").html(whole);
	var tabsSwiper = new Swiper('#tabs-container',{
    speed:500,	
    onSlideChangeStart: function(){
      $(".tabs .active").removeClass('active')
      $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active')
//	  $(".swiper-slide").html("")
//	  $("#whole").html(whole);
//	  $("#pendingPay").html(" ");
//	  $("#stayHarvest").html(" ");
//	  $("#completed").html(" ");
//	  var swiperslide=$(".swiper-wrapper .swiper-slide").eq(tabsSwiper.activeIndex);
//		var heightS=$(swiperslide).height()
////		console.log(tabsSwiper.activeIndex)
//	  console.log(tabsSwiper.activeIndex)
//	  console.log(heightS)
//		alert(height)
//	  $(".swiper-wrapper").height(heightS)
//	  console.log($(".swiper-wrapper").height())
    }
  })
  $(".tabs a").on('touchstart mousedown',function(e){
    e.preventDefault()
    $(".tabs .active").removeClass('active')
    $(this).addClass('active')
    tabsSwiper.slideTo( $(this).index() )
  })
  $(".tabs a").click(function(e){
    e.preventDefault()
  })

}