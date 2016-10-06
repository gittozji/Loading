$(document).ready(function(){
	function LoadingClass(){
		this.wrap = jQuery(".mmd-loading-wrap");
		this.run = function(){
			this.wrap.each(function(i){
			
				//����ԲȦ�Ŀ��
				var bw = Math.round($(this).width()/15);
				var w = $(this).width() - 2 * bw;
				//ͨ���Զ������Եõ�ԲȦ����ɫ
				var circleColor = $(this).attr("circleColor");
				
				//��̬����ԲȦ��������һ���汾��html�Ĵ�����Ƶ�js�У�����html����ʹ����
				var div = "<div class='mmd-loading-circle-layout'>"
					  +"<div class='mmd-loading-layout-left'>"
						+"<div class='mmd-loading-circle-left'"
							+"style='width:"+w+"px;height:"+w+"px;border-width:"+bw+"px;border-color:"+circleColor+";"
								+"border-left:"+bw+"px solid transparent;"+"border-bottom:"+bw+"px solid transparent;'"+"></div>"
					  +"</div>"
					  +"<div class='mmd-loading-layout-right'>"
						+"<div class='mmd-loading-circle-right'"
							+"style='width:"+w+"px;height:"+w+"px;border-width:"+bw+"px;border-color:"+circleColor+";"
								+"border-right:"+bw+"px solid transparent;"+"border-top:"+bw+"px solid transparent;'"+"></div>"
					  +"</div>"
				  +"</div>";
				$(this).append(div);
			});
		}
	}
	//�Զ�����
	(function(){
		var loading = new LoadingClass();
		loading.run();
	})();
});