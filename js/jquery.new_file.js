	$(function() {
				//选项卡切换
				$('.category ul li').click(function() {
					indexC = $(this).index();
					$(this).addClass('active').siblings().removeClass('active');
					$('.cont').eq(indexC).addClass('active').siblings().removeClass('active');
				})
				//按钮箭头
				var catew = $('.category').width() - 150;
				var cateLiw = 0;
				$('.category ul li').each(function() {
					cateLiw += $(this).outerWidth();
				})
				var i = 0;
				$('.next').click(function() {
					$('.category ul').animate({
						"margin-left": -catew + 'px'
					}, 500)
					i++;
					if ((catew + 150) * i + (catew + 150) >= cateLiw) {
						$('.prev').show();
						$('.next').hide();
					}
				})
				$('.prev').click(function() {
					$('.category ul').animate({
						"margin-left": 0 + 'px'
					}, 500)
					$(this).hide();
					$('.next').show();
				})
			})