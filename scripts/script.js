$(function()
{
	$('.accContainer').hide(); //hide all contents
	$('.accordion:first').next().slideDown(); //show first instance of contents
	
	$('.accordion').click(function()
		{
			if( $(this).next().is(':hidden') ) 
			{
				$('.accordion').next().slideUp();
				//triggers the hiding of contents
				$(this).next().slideDown();
				//triggers slide down of contents
			}
			return false; //prevents browser default
		});

}); //document.ready function