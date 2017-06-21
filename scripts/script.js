//***************************************Accordion Function******************************


$(function()
{
    //*******Sticky and rsponsive menu function*********
    var menuBtn = $('#menuBtn');
    var listAnchor = $('.list-anchor');
    var navOffset = jQuery('.menuBG').offset().top;
    jQuery(".menuBG").wrap('<div class="men-placeholder></div>');
    jQuery(window).scroll(function()
    {
       var scrollPos = jQuery(window).scrollTop(); 
        jQuery(".status").html(scrollPos);
        
        if(scrollPos >= navOffset)
            {
                jQuery(".menuBG").addClass("fixed");  
                jQuery(".menuBG").addClass("fixed");
                $("#menu").css('margin','0px');
            }
        else{
                jQuery(".menuBG").removeClass("fixed");
        }
    });
    
    
    menuBtn.click(function(){
        $('#menu').slideToggle();
    });
    listAnchor.click(function(){
        $('#menu').hide();
    });
    
    //***************************************************** 
    
    var wSize = $(window).width();
    alert(wSize);
    
    var accordion = $('section');//find what wraps around the accordion
    var openA = $('#openAll');

    accordion.find('.accContainer').hide(); //Hide the content on load
    accordion.find('.accordion').on('click', function()
    {
      $(this).next('.accContainer').slideToggle();  //toggle between open and close on click
      $(this).find("img").toggleClass('minus', 20000,'easeInQuart'); //Arrow Animation Here
       
    });

    
    openA.on('click', function() //Stupid non functioning function
   {
      if ($('.accContainer').is(':visible')) 
      {

          accordion.find('.accContainer').slideUp();
          accordion.find("img").removeClass('minus', 'true');

      }
        
      else 
      {
          accordion.find('.accContainer').slideDown();
          accordion.find("img").toggleClass('minus', 20000,'easeInQuart');

     }
   });
    

   
   
});//same as document.ready Function

//**************************************End Accordion**********************************



//****************************************Files MODAL****************************************
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() 
{
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() 
{
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}
//**************************************************END MODAL*******************************

//****************************************Upcoming MODAL****************************************
// Get the modal
var modal = document.getElementById('upcomingModal');

// Get the button that opens the modal
var btn = document.getElementById("upcomingBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() 
{
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() 
{
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}
//**************************************************END MODAL*******************************

//*******************************Check Box CheckAll function********************************
function selectAll(status) 
  {
      $('input[name=Exhibit]').each(function()
      { 
          $(this).prop('checked', status);
      });
      
      $('input[name=format]').each(function()
      { 
          $(this).prop('checked', status);
      });
  }
//**********************************End Check All********************************************
