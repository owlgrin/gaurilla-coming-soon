var ajax_form = true;

$( document ).ready(function() { // Document ready
 
/*-----------------------------------------------------------------------------------*/
/*	01. FADE IN EFFECTS
/*-----------------------------------------------------------------------------------*/
		
		$('#header .picture').hide();

		$('.fade1').delay(300).fadeIn(1500);
		
		$('.fade2').delay(600).fadeIn(1500);
		
		$('.fade3').delay(900).fadeIn(1500);
		
		var flydown = function() {
			console.log('downing');
			$('#header .picture').animate({'top': 15}, 2500, flyup);
		}
		var flyup = function() {
			console.log('uping');
			$('#header .picture').animate({'top': -15}, 2500, flydown);
		}
		
		$('#header .picture').delay(500).show('fast').animate({'top': 35}, 1500, flyup);

			 
		$('#header .picture').css('top', function(){ return $(this).height() });


/*-----------------------------------------------------------------------------------*/
/*	02. Get the CBPSCROLLER
/*-----------------------------------------------------------------------------------*/


			new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );

			
/*-----------------------------------------------------------------------------------*/
/*	03. SMOOTH SCROLLING ON BUTTON
/*-----------------------------------------------------------------------------------*/
	

$('#notify-button').click(function(e){
    $('html,body').scrollTo(this.hash,this.hash);
    e.preventDefault();
});


/*-----------------------------------------------------------------------------------*/
/*	04. FORM SENDER
/*-----------------------------------------------------------------------------------*/
	

	/* Form Submission */
	$('form').submit(function() {
		
		var form_data = $(this).serialize();

		if (validateEmail($('input[name=email]').attr('value')))
		{
			
			if (typeof ajax_form !== "undefined" && ajax_form === true)
			{
				
				$.post($(this).attr('action'), form_data, function(data) {
					$('form').show('slow', function() { $(this).after('<div class="clear"></div> <p class="msg-ok">'+ data + '</p>'); });
	  				$('.spam').hide();
	  				$('.msg-ok').delay(300).effect("pulsate", { times:1 }, 1000);
				});
				
				return false;
				
			}
			
		}

		else
		{
			$('p.spam').text('Please enter a valid e-mail').effect("pulsate", { times:3 }, 1000);
			return false;
		}
		
	});


/* Validate E-Mail */

function validateEmail(email) { 
  // http://stackoverflow.com/a/46181/11236
  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}




});

			
