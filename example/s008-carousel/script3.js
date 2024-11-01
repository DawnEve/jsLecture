document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
	let intervalTime = 4000; // 自动播放间隔时间，单位为毫秒  
	let autoPlayInterval; // 更改变量名以避免与其他可能的全局变量冲突  

    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

	//-1 means previouse slide
    function showNextSlide(i=1) {
        currentIndex = (currentIndex + i + totalItems) % totalItems;
        updateCarousel();
    }

	function startAutoPlay() {  
        // 清除可能存在的旧间隔  
        clearInterval(autoPlayInterval);  
        // 设置新的自动播放间隔  
        autoPlayInterval = setInterval(showNextSlide, intervalTime);  
    }  

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    indicators.forEach(indicator => {
        indicator.addEventListener('click', function () {
            const index = Array.prototype.indexOf.call(indicators, this);
            currentIndex = index;
            updateCarousel();  
            // 停止自动播放，但不需要立即重新启动，因为用户可能想要手动浏览几张幻灯片  
            stopAutoPlay();  
            // 可以在这里添加一个延迟后自动重启的逻辑，或者让用户通过其他方式（如点击某个按钮）来重启自动播放
        });
    });

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);


    // 添加键盘左右箭头事件监听器  
    document.addEventListener('keydown', function (event) {  
        if (event.key === 'ArrowLeft') {  
            showNextSlide(-1);  
            stopAutoPlay(); // 停止自动播放，用户可能想要通过键盘连续浏览  
            // 可以在这里添加逻辑来在一段时间后自动重启自动播放  
        } else if (event.key === 'ArrowRight') {  
            showNextSlide(1);  
            stopAutoPlay(); // 同上  
        }  
    });


    // Initialize the carousel
    updateCarousel();
    startAutoPlay(); // 开始自动播放

});






// 当文档加载完成后执行: 所有的链接都是新窗口打开
document.addEventListener('DOMContentLoaded', function() {
	// 获取所有的a标签
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		// 检查链接是否是外部链接
		if (links[i].host !== window.location.host) {
			// 为外部链接添加点击事件监听器
			links[i].addEventListener('click', function(event) {
				// 阻止默认行为
				event.preventDefault();
				// 在新窗口中打开链接
				window.open(this.href, '_blank');
			});
		}
	}
});