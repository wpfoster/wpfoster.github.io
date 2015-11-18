
var $mask = $('<div id="mask"></div>');
var $image = $('<img id="maskimg">');
var $caption = $('<p id="maskcap"></p>');

$mask.append($image);
$mask.append($caption);

$("body").append($mask);

$(".gallink").click(function(event){
	
	event.preventDefault();
	
	var imageLocation = $(this).attr("href");
	
	$image.attr("src", imageLocation);
	
	
	
	
	
	var captionText = $(this).children("p").text();
	$caption.text(captionText);
	// alert($("body").height());
	
	var windowTop = $(window).scrollTop();
	var pageHeight = $("body").height();
	var viewportFrac = $(window).height() / 20;
	var imgPosition	= windowTop + viewportFrac
	var pagewidth = $("body").height();
	var viewportFrac = $(window).height() / 20;
	
	var viewWidth = $(window).width();
	var viewHeight = $(window).height();
	var breakConditionn =viewHeight*0.80;
	var conditionTest =viewWidth * 0.8*1.2; 

	
	var position = $(window).scrollTop();
	
	$("#mask").css({
		'height':$("body").height()
	});
	
	
	//alert(viewWidth);
	//alert(viewHeight);
	//alert(breakConditionn);
	//alert(conditionTest);
	//alert(conditionTest<breakConditionn);
	
	$("#maskimg").css({
		'margin':'4rem auto 0rem auto',
		'margin-top':imgPosition,
		'height':'',
		'max-height':'',
		'width':'',
		'max-width':''
	  });
	
	if(conditionTest<breakConditionn){
	
		$("#maskimg").css({

		'width':'80%',
		'max-width':'650px'
		
		
		});
		//alert("width");
	}
	else {
		var percenHeight = viewHeight * 0.8;
		
		
		$("#maskimg").css({

		'height':percenHeight,
		'max-height':'780px'
		
		
		
		});
		//alert("height");
		
		
	}
	
$mask.show();

	
	
});

$mask.click(function(){
	
	$mask.hide();
});


