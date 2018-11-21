$('.owl-one').owlCarousel({
    loop:true,
	dots: true,
    nav:true,
    responsive:{
        0:{
			items:1,
			dots:false,
			nav:true,
        },
        768:{
			dots:true,
			items:1,
			nav:false,
        },
        1000:{
			items:1,
			nav:false,
        }
    }
})
$(function(){

	onscroll()

})

function onscroll(){

	$(window).scroll(function () {
		let height = "1";
		let scroll = $(window).scrollTop();
		if (scroll > height) {
			$("header").addClass("active");
		} else{
			$("header").removeClass("active");
		}
	});
}
