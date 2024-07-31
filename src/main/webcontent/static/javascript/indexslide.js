// indexslide.js
$(document).ready(function() {
    // 슬라이더 초기화
    var slider = $('.bxslider').bxSlider({
        speed: 1000, // 전환 속도
        pause: 5000, // 정지 시간
        minSlides: 1, // 최소 슬라이드 개수
        maxSlides: 1, // 최대 슬라이드 개수
        slideMargin: 0, // 슬라이드 간격
        mode: "fade", // 페이드 모드
        pager: true, // 페이징 표시
        auto: true // 자동 재생
    });

    // 슬라이드 이동 버튼 이벤트 처리 (해당 버튼이 있을 경우)
    $('.slide-1').on('click', function() {
        slider.goToSlide(0);
    });

    $('.slide-2').on('click', function() {
        slider.goToSlide(1);
    });

    $('.slide-3').on('click', function() {
        slider.goToSlide(2);
    });

    $('.next').on('click', function() {
        slider.goToNextSlide();
    });
});
