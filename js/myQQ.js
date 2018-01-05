$(function(){
	setTimeout(function(){
		$(".section1").addClass("comein");
	},200);
	$("#fullpage").fullpage({
		navigation: true,
		loopBottom: true,
		onLeave: function(index,nextIndex,direction){
			$(".section1").removeClass("comein");
			//第一屏放大效果,之添加类
			if(nextIndex == 1){
				$(".section1").addClass("comein");
			}
			if(nextIndex != 1){
				//第二屏背景添加旋转
				$("#bg").addClass("rotate");
			}else {
				$("#bg").removeClass("rotate");
			}
			//第二屏放大效果,之修改css样式
			if(nextIndex == 2){
				$(".p2").css("transform","translateX(-50%) translateY(-50%) translateZ(0px) scale(1)");
				$(".title1_2").css("transform","translate(-55%,180%) translateZ(0px) scale(1)");
			}else {
				$(".p2").css("transform","translateX(-50%) translateY(-50%) translateZ(2000px) scale(1)");
				$(".title1_2").css("transform","translate(-55%,180%) translateZ(2000px) scale(1)");
			}
			if(nextIndex == 3){
				$(".p3").css("transform","translateZ(-50px) rotateX(30deg)");
				$(".title3").css("transform","translateZ(0px) rotateY(0deg)");
			}
			if(nextIndex !=3){
				$(".p3").css("transform","translateZ(-200px) rotateX(-45deg) translateX(2000px)");
				$(".title3").css("transform","translateZ(1200px) rotateY(-60deg)");
			}
			if(nextIndex == 4){				
				$(".p4").css("transform", "translateZ(0px) rotateY(0deg)");
				$(".img5").css("transform","translate(-70%,85%) translateZ(0px) rotateY(0deg)");
			}
			if(nextIndex != 4){
				$(".p4").css("transform", "translateZ(1200px) rotateY(-60deg)");
				$(".img5").css("transform","translate(-70%,85%) translateZ(1000px) rotateY(-90deg)");
			}
		}
	});
});