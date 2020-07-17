$(document).ready(function(){
   
    $('.slick-slider').slick({
      "arrows":false
    });

    $(".featuresWrapFlex .icon").click(function(){
       $(".icon").each(function(){
          $(this).removeClass("active"); 
       }); 
       $(this).addClass("active");

       var slideIndex = parseInt($(this).data("slide"));
       $('.slick-slider').slick('slickGoTo',slideIndex);

    });

    $('.slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
       $(".icon").each(function(){
          $(this).removeClass("active"); 
       }); 
       $(".icon-"+nextSlide).addClass("active");
    });

    $(".questionsWrap").on("click",".question",function(){
        if( !$(this).hasClass("active") ){
            $(this).siblings(".question").removeClass("active");
            $(this).toggleClass("active");
            $(this).siblings(".question").next().slideUp();
            $(this).next().slideDown();
        }       
    });
    
    $("#showMoreCredits").click(function(){
        $("#moreCredits").slideToggle();
    })
	
	$('#payModal').on('show.bs.modal', function (e) {
        $(".navbar").css("margin-left","-8.5px");
    });
    $('#payModal').on('hidden.bs.modal', function (e) {
        $(".navbar").css("margin-left","0");
    });
	
	$('.topBanner').find('.close').click(function(){
		$('.topBanner').addClass('invisible');
	});


    $('body').on('submit','.applyForm',function(e){
        e.preventDefault();

        var action = $(this).attr("action");
        var message = $(this).data("message");
        if (action == undefined)
        {
          action = '/influencers-form/';
        }

        if (message == undefined)
        {
          message = 'Thanks for your application and for making Pinngle better together with us';
        }

        $.ajax(
            {'dataType':'json','type':'POST','beforeSend':function()
            {
                $(".applyForm").find("button").attr("disabled","disabled");
            },
            'success':function(data)
            {
              var form=$(".applyForm");
              if(data.success)
              {
                alert(message);
                form[0].reset();
              }
              else
              {
                
              }
            },
            'complete':function()
            {
                $(".applyForm").find("button").removeAttr("disabled");
            },
            'url':action,
            'cache':false,
            'data':$(this).serialize()
        });
    });
});

