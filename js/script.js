

$(document).ready(function(){
    $(".slider").slick({
        centerMode: true,
        centerPadding:"0px",
        slidesToShow: 3,
        responsive: [
            {
            breakpoint:991,
            settings: {
                centerMode: true,
                centerPadding:"0px",
                slidesToShow: 2
            }
            },
            {
                breakpoint:768,
                settings: {
                    centerMode: true,
                    centerPadding:"0px",
                    slidesToShow: 3
                }
                },
            {
                breakpoint: 560,
                settings: {
                    centerMode: true,
                    slidesToShow: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                 centerMode: true,
                slidesToShow: 1
            }
            }
        ]
        
    });

    $('.accordion').click(function(event){
		$(this).toggleClass('active').next().slideToggle(300);
	});
      $(".cp__color").click(function(){
        if(!$(this).hasClass('active')){
            $(this).siblings().removeClass('active' );
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });
  

    $('.button__options').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass("active")){
            $(".button__options").removeClass('active');
            $(".conf__add").removeClass('active');
            $('.color-clothes').removeClass('active');
            $(this).addClass("active");
           
            $(".conf__color").removeClass('active');
            $($(this).attr('data-tab')).addClass("active");
        }
    });
    
    $('.button__options').click();

    $('.color-clothes').click(function(){
        $(this).toggleClass('active');
        $(".conf__panel").toggleClass('active')
    });
   
    $(".add__block").click(function(){
        if(!$(this).hasClass("active")){
            $(".add__block").removeClass("active");
            $(this).addClass("active");
        }else{
            $(this).removeClass("active");
            
        }
    });
    
});


