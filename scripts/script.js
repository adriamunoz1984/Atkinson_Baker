//***************************************Accordion Function******************************

$(function()
{
    var accordion = $('section');//find what wraps around the accordion
    var openA = $('#openAll');

    accordion.find('.accContainer, .schedContainer').hide(); //Hide the content on load
    accordion.find('.accordion').on('click', function()
    {
      $(this).next('.accContainer, .schedContainer').slideToggle();  //toggle between open and close on click
      $(this).find("img").toggleClass('minus', 20000,'easeInQuart'); //Arrow Animation Here
       
    });
//    openA.on('click', function() //Stupid non functioning function
//    {
//        accordion.find('.accContainer, .schedContainer').slideToggle();
//    });
    
});//same as document.ready Function

//**************************************End Accordion**********************************



//****************************************MODAL****************************************
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



//*******************************Check Box CheckAll function********************************
function selectAll(status) 
  {
      $('input[name=Exhibit]').each(function()
      { 
          $(this).prop('checked', status);
      });
  }
//**********************************End Check All********************************************
