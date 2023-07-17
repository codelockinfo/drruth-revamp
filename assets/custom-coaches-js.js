
$('.card--standard::before').each(function() {
  var link = $(this).html();
  $(this).contents().wrap('<a href="https://www.w3schools.com/jquery/sel_header.asp"></a>');
});

var $j = jQuery.noConflict();

$j(document).ready(function() {
  $j(".card--standard::before").click(function() {
    window.open('https://www.w3schools.com/jquery/sel_header.asp');
  });
});


document.getElementById('Details-3-template--14940389605441__main-collection-product-grid').addEventListener("click", function() {



});

window.addEventListener("load", (event) => {

  document.getElementsByClassName("facets__disclosure-vertical").click();

  $(document).ready(function(){
    $(".facets__disclosure-vertical").trigger('click');
    });
  
$(document).ready(function(){
  $("#Details-3-template--14940389605441__main-collection-product-grid").click();
});


  
});
 