$(document).ready(function() {

  	//grab the width and calculate left value
	var item_width = $('#slides li').outerWidth();
	var left_value = item_width * (-100);


	$('#one').click(function() {
		$(this).addClass('active');
		$('#two, #three').removeClass('active');
		$('#slides').css({'left' : '0'});
	});


    //if user clicked on next button
	$('#two').click(function() {
		$(this).addClass('active');
		console.log('one')
		$('#one, #three').removeClass('active');
		console.log('two')
		$('#slides').css({'left' : '-100vw'});
		console.log('yes!');
	});

  $('#three').click(function() {
    $(this).addClass("active");
    $('#two, #one').removeClass('active');
    $('#slides').css({'left' : '-200vw'});

		});

		return false;
	});
	
