document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
	let autoPlayInterval; // 更改变量名以避免与其他可能的全局变量冲突  

    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }
	
	function startAutoPlay() {  
        // 清除可能存在的旧间隔  
        clearInterval(autoPlayInterval);  
        // 设置新的自动播放间隔  
        autoPlayInterval = setInterval(showNextSlide, 3000);  
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

    // Initialize the carousel
    updateCarousel();
    startAutoPlay(); // 开始自动播放
});