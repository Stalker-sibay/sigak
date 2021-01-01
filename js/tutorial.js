$(document).ready(function(){
	$('.bxslider').bxSlider({
	  pagerCustom: '#bx-pager',
	  mode: 'fade',
	  easing: 'swing',
	  controls:false
	  
	});	
	$('.photo').bxSlider({
	  slideWidth: 480,
	  moveSlides: 1,
	  maxSlides: 5,
	  //shrinkItems:true,
	  pager: false,
	  minSlides: 3,
	  auto: true
	});
	$("a.scroll").click(function () {
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			if ($.browser.safari) {
				$('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
			} else {
				$('html').animate({ scrollTop: destination }, 1100);
			}
			return false; 
    });	
 });
ymaps.ready(function () {
    var map = new ymaps.Map('map', {
        center: [55.7, 37.6],
        zoom: 6,
        controls: []
    });
    // Создание метки с круглой активной областью.
    var circleLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="circle_layout">12 085</div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [55.783202, 37.605584], {
            hintContent: 'Метка с круглым HTML макетом'
        }, {
            iconLayout: circleLayout,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 55
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
});